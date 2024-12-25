import { FC } from "react";
import H4 from "../../../UI/text/H4";

interface Props {
    users: Array<any>
}

const TableUsers: FC<Props> = ({ users }) => {
    return (
        <>
            <table className="table-fixed w-full">
                <thead className="h-[90px] px-5">
                    <tr>
                        <th>
                            <H4>Номер</H4>
                        </th>
                        <th>
                            <H4>Имя</H4>
                        </th>
                        <th>
                            <H4>Телефон</H4>
                        </th>
                        <th>
                            <H4>Дата</H4>
                        </th>
                        <th>
                            <H4>Информация</H4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, number) => {
                        return (
                            <>
                                <tr className={`border-t border-accent h-[75px] ${number % 2 === 0 ? 'bg-surface' : ''}`} key={number}>
                                    <td className="pl-5">1</td>
                                    <td>ljs</td>
                                    <td>;sdfl;</td>
                                    <td>sdhaf</td>
                                    <td className="overflow-x-auto">hjlks;fdsa;sdflasf;asdlkfasklf;lasd;flsdf</td>
                                    <td className="">hjlkff</td>
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