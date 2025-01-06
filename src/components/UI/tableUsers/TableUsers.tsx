import { FC, useContext, useEffect, useMemo, useState } from "react";
import H4 from "../text/H4";
import Input from "../input/Input";
import trash_SVG from '../../../assets/svg/trash.svg';
import { UserPhone } from "../../../models/UserPhone";
import filterUsersPhoneByInput from "../../../utils/filterUsersPhoneByInput";
import { deleteUserPhone, updateUserPhone } from "../../../api/requests/Requests";
import { AuthentificationContext, PopupContext } from "../../../App";
import InputMask from "react-input-mask";
import ButtonSubmit from "../button/ButtonSubmit";
import AnimatedElementFade from "../../Animation/AnimatedElementFade";



const TableUsers: FC<{ userPhones: UserPhone[], onlyRead?: boolean }> = ({ userPhones, onlyRead = false }) => {
    let [searchInput, setSearchInput] = useState<string>('');
    let [updatedUserPhones, setUpdatedUserPhones] = useState<UserPhone[]>([]);

    let { steckMessages, setSteckMessages } = useContext(PopupContext);
    let { setIsAuthenticated } = useContext(AuthentificationContext);

    const updateData = ({ name, value, id }: { name: string, value: string, id: number }) => {
        let findedUserPhone = userPhones.find((userPhone) => userPhone.user_phone_id === id);

        if (findedUserPhone) {
            switch (name) {
                case 'name':
                    findedUserPhone.name = value;
                    break;
                case 'phone':
                    findedUserPhone.phone = value.slice(0, 18);
                    break;
                case 'info':
                    findedUserPhone.information_about_user = value;
                    break;
            }

            if (updatedUserPhones.find((userPhone) => userPhone.user_phone_id === findedUserPhone.user_phone_id)) {
                setUpdatedUserPhones(updatedUserPhones.map((userPhone) => { return (userPhone.user_phone_id === findedUserPhone.user_phone_id ? findedUserPhone : userPhone) }))
            } else {
                setUpdatedUserPhones([findedUserPhone, ...(updatedUserPhones || [])])
            }
        }
    }


    useEffect(() => {
        console.log(updatedUserPhones);
    }, [updatedUserPhones])

    const updateData_request = async () => {
        try {
            console.log(updatedUserPhones);
            
            let response = await updateUserPhone(updatedUserPhones);
            if (response.code >= 200 && response.code <= 299) {
                setSteckMessages([{ isErrorPopup: false, message: 'Данные успешно сохранены' }, ...(steckMessages || [])]);
            } else {
                setSteckMessages([{ isErrorPopup: true, message: 'Что-то пошло не так' }, ...(steckMessages || [])]);            
            }
        } catch (error) {
            setSteckMessages([{ isErrorPopup: true, message: 'Невозможно отправить данные. Повторите попытку позже' }, ...(steckMessages || [])]);
        }
    }

    const deleteUserPhoneInTable = async (event: any) => {
        let id: number = Number(event.currentTarget.getAttribute('data-id'));

        try {
            let response = await deleteUserPhone(id);

            if (response.code >= 200 && response.code <= 299) {
                setSteckMessages([{ isErrorPopup: false, message: 'Пользователь успешно удален из базы данных. Сайт скоро обновится, чтобы данные синхронизировались!' }, ...(steckMessages || [])]);
                setTimeout(() => { location.reload(); }, 3000);
            } else if (response.code === 401) {
                setSteckMessages([{ isErrorPopup: true, message: 'Сессия не может быть открыта для вам. Вам следует войти в панель администратора! Сайт переносит вас на страницу входа в панель администрации.' }, ...(steckMessages || [])]);
                setTimeout(() => { setIsAuthenticated(false); }, 3000);
            } else {
                setSteckMessages([{ isErrorPopup: true, message: `Произошла ошибка при удалении ${id} пользователя` }, ...(steckMessages || [])]);
            }
        } catch (error) {
            setSteckMessages([{ isErrorPopup: true, message: 'Произошла ошибка во время работы сервера' }, ...(steckMessages || [])]);
        }

    }

    let resultFilter = useMemo(() => filterUsersPhoneByInput(userPhones, searchInput), [searchInput]);

    return (
        <>
            <table className="table-fixed w-full min-w-[1300px]">
                <thead className="h-[90px] px-5">
                    <tr>
                        <th className="pl-5 w-36">
                            <H4>Номер</H4>
                        </th>
                        <th className="pl-5 w-48">
                            <H4>Имя</H4>
                        </th>
                        <th className="pl-5 w-44">
                            <H4>Телефон</H4>
                        </th>
                        <th className="pl-5 w-28">
                            <H4>Дата</H4>
                        </th>
                        <th className="pl-5 w-96">
                            <H4>Информация</H4>
                        </th>
                        <th className="px-5">
                            <Input placeholder="Поиск..." name="search" onInput={(event: any) => { setSearchInput(event.target.value); }} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {resultFilter.length !== 0 ?
                        <>
                            {resultFilter.map((userPhone, number) => {
                                return (
                                    <tr key={userPhone.user_phone_id} className={`border-t border-accent h-[75px] ${number % 2 === 0 ? 'bg-surface' : ''}`} >
                                        <td className="pl-5">{userPhone.user_phone_id}</td>
                                        <td className="overflow-x-auto pl-5">
                                            <input
                                                value={userPhone.name}
                                                placeholder="Имя"
                                                name="name"
                                                disabled={onlyRead}
                                                className={`bg-transparent border-0 w-full ${onlyRead ? 'cursor-not-allowed' : ''}`}
                                                onInput={(event: any) => { updateData({ name: 'name', value: event.target.value, id: userPhone.user_phone_id }) }}
                                            />
                                        </td>
                                        <td className="pl-5">
                                            <InputMask
                                                mask="+7 (999) 999-99-99"
                                                // onInput={(event: any) => { setUserPhone(event.target.value.slice(0, 18)); setIsPhoneInputError(false); }}
                                                value={userPhone.phone}
                                                placeholder="Телефон*"
                                                name="userPhone"
                                                disabled={onlyRead}
                                                className={`bg-transparent border-0 w-full ${onlyRead ? 'cursor-not-allowed' : ''}`}
                                                onInput={(event: any) => { updateData({ name: 'phone', value: event.target.value, id: userPhone.user_phone_id }) }}
                                            />
                                        </td>
                                        <td className="pl-5">
                                            <input
                                                value={userPhone.date_of_send}
                                                placeholder="Дата отправки"
                                                name="date"
                                                disabled
                                                className="bg-transparent border-0 w-full cursor-no-drop"
                                            />
                                        </td>
                                        <td className="overflow-x-auto pl-5">
                                            <textarea
                                                value={userPhone?.information_about_user}
                                                placeholder="Доп. инфа о пользователе"
                                                name="info_about_user"
                                                disabled={onlyRead}
                                                className={`bg-transparent border-0 w-full ${onlyRead ? 'cursor-not-allowed' : ''}`}
                                                onInput={(event: any) => { updateData({ name: 'info', value: event.target.value, id: userPhone.user_phone_id }) }}
                                            />
                                        </td>
                                        <td className="px-5 text-right">
                                            {onlyRead ? 
                                            ''
                                            :
                                            <div className="cursor-pointer hover:opacity-40 duration-500 ease-in-out" onClick={deleteUserPhoneInTable} data-id={userPhone.user_phone_id}><img src={trash_SVG} alt="trash_icon" className="inline-block" /></div>
                                            }
                                        </td>
                                    </tr>
                                )
                            })}
                        </>
                        : <tr><td colSpan={6} className="text-center font-semibold text-[26px] text-secondary">Упростите фильтр</td></tr>}
                </tbody>
            </table>
            {updatedUserPhones.length > 0 ?
                <AnimatedElementFade animateFade="animate-fade">
                    <ButtonSubmit onClick={updateData_request}>Сохранить изменения</ButtonSubmit>
                </AnimatedElementFade>
                : ''}
        </>
    );
}

export default TableUsers;