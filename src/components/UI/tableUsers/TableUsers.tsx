import { FC } from "react";
import H4 from "../text/H4";
import Input from "../input/Input";
import trash_SVG from '../../../assets/svg/trash.svg';

interface Props {
    users: Array<any>
}

const TableUsers: FC<Props> = ({ users }) => {

    const deleteUserPhone = (): void => {
        if(window.confirm('Вы действительно хотите удалить пользователя?')) {
            console.log('The user was deleted');
        } else {
            console.log('The operation was canceled');
        }
    }

    return (
        <>
            <table className="table-fixed w-full min-w-[1400px]">
                <thead className="h-[90px] px-5">
                    <tr>
                        <th className="pl-5 w-36">
                            <H4>Номер</H4>
                        </th>
                        <th className="pl-5 w-36">
                            <H4>Имя</H4>
                        </th>
                        <th className="pl-5 w-36">
                            <H4>Телефон</H4>
                        </th>
                        <th className="pl-5 w-36">
                            <H4>Дата</H4>
                        </th>
                        <th className="pl-5 w-96">
                            <H4>Информация</H4>
                        </th>
                        <th className="px-5">
                            <Input placeholder="Поиск..." />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, number) => {
                        console.log(number);
                        
                        return (
                            <>
                                <tr className={`border-t border-accent h-[75px] ${number % 2 === 0 ? 'bg-surface' : ''}`} key={number}>
                                    <td className="pl-5">1</td>
                                    <td className="pl-5">ljs</td>
                                    <td className="pl-5">;sdfl;</td>
                                    <td className="pl-5">sdhaf</td>
                                    <td className="overflow-x-auto pl-5">hjlks;fdsa;sdflasf;asdlkfasklf;lasd;flsdf</td>
                                    <td className="px-5 text-right"><div className="cursor-pointer hover:opacity-40 duration-500 ease-in-out" onClick={deleteUserPhone}><img src={trash_SVG} alt="trash_icon" className="inline-block" /></div></td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
        </>
    );
}

export default TableUsers;