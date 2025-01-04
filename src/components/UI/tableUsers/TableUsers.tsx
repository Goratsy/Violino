import { FC, useContext, useMemo, useState } from "react";
import H4 from "../text/H4";
import Input from "../input/Input";
import trash_SVG from '../../../assets/svg/trash.svg';
import { UserPhone } from "../../../models/UserPhone";
import filterUsersPhoneByInput from "../../../utils/filterUsersPhoneByInput";
import { deleteUserPhone } from "../../../api/requests/Requests";
import { AuthentificationContext, PopupContext } from "../../../App";

const TableUsers: FC<{ userPhones: UserPhone[] }> = ({ userPhones }) => {
    let [searchInput, setSearchInput] = useState<string>('');
    
    let { setIsOpenPopup, setIsErrorPopup, setPopupMessage } = useContext(PopupContext);
    let { setIsAuthenticated } = useContext(AuthentificationContext);

    const deleteUserPhoneInTable = async (event: any) => {
        let id: number = Number(event.currentTarget.getAttribute('data-id'));

        try {
            let response = await deleteUserPhone(id);

            if (response.code >= 200 && response.code <= 299) {
                setIsErrorPopup(false);
                setIsOpenPopup(true);
                setPopupMessage('Пользователь успешно удален из базы данных. Сайт скоро обновится, чтобы данные синхронизировались!');
                setTimeout(() => { location.reload(); }, 3000);
            } else if (response.code === 401) {
                setIsErrorPopup(true);
                setIsOpenPopup(true);
                setPopupMessage('Сессия не может быть открыта для вам. Вам следует войти в панель администратора! Сайт переносит вас на страницу входа в панель администрации.');
                setTimeout(() => { setIsAuthenticated(false); }, 3000);
            } else {
                setIsErrorPopup(true);
                setIsOpenPopup(true);
                setPopupMessage('Произошла ошибка при удалении данных');
            }
        } catch (error) {
            setIsErrorPopup(true);
            setIsOpenPopup(true);
            setPopupMessage('Произошла ошибка во время работы сервера');
        }

    }

    let resultFilter = useMemo(() => filterUsersPhoneByInput(userPhones, searchInput), [searchInput]);

    return (
        <>
            <table className="table-fixed w-full min-w-[1200px]">
                <thead className="h-[90px] px-5">
                    <tr>
                        <th className="pl-5 w-36">
                            <H4>Номер</H4>
                        </th>
                        <th className="pl-5 w-36">
                            <H4>Имя</H4>
                        </th>
                        <th className="pl-5 w-44">
                            <H4>Телефон</H4>
                        </th>
                        <th className="pl-5 w-36">
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
                                        <td className="pl-5">{number + 1}</td>
                                        <td className="overflow-x-auto pl-5">{userPhone.name}</td>
                                        <td className="pl-5">{userPhone.phone}</td>
                                        <td className="pl-5">{userPhone.date_of_send}</td>
                                        <td className="overflow-x-auto pl-5">{userPhone?.information_about_user}</td>
                                        <td className="px-5 text-right"><div className="cursor-pointer hover:opacity-40 duration-500 ease-in-out" onClick={deleteUserPhoneInTable} data-id={userPhone.user_phone_id}><img src={trash_SVG} alt="trash_icon" className="inline-block" /></div></td>
                                    </tr>
                                )
                            })}
                        </>
                        : <tr><td colSpan={6} className="text-center font-semibold text-[26px] text-secondary">Упростите фильтр</td></tr>}

                </tbody>
            </table>
        </>
    );
}

export default TableUsers;