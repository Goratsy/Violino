import { FC, useMemo, useState } from "react";
import H4 from "../text/H4";
import Input from "../input/Input";
import trash_SVG from '../../../assets/svg/trash.svg';
import { UserPhone } from "../../../models/UserPhone";
import filterUsersPhoneByInput from "../../../utils/filterUsersPhoneByInput";

const TableUsers: FC<{ userPhones: UserPhone[] }> = ({ userPhones }) => {
    let [searchInput, setSearchInput] = useState<string>('');

    const deleteUserPhone = (): void => {
        if (window.confirm('Вы действительно хотите удалить пользователя?')) {
            console.log('The user was deleted');
        } else {
            console.log('The operation was canceled');
        }
        location.reload();
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
                                        <td className="px-5 text-right"><div className="cursor-pointer hover:opacity-40 duration-500 ease-in-out" onChange={deleteUserPhone}><img src={trash_SVG} alt="trash_icon" className="inline-block" /></div></td>
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