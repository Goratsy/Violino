import { FC } from "react";
import HeadingOfSection from "../../../UI/text/HeadingOfSection";
import H2 from "../../../UI/text/H2";
import Subtitle from "../../../UI/text/Subtitle";
import TableUsers from "../../../UI/tableUsers/TableUsers";
import { UserPhone } from "../../../../models/UserPhone";

const TodayUsersSection: FC<{ filteredUserPhones: UserPhone[] }> = ({ filteredUserPhones }) => {
    return (
        <>
            <section className="mt-[130px] T:mt-[100px] TS:mt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                <div>
                    <div>
                        <HeadingOfSection className="text-center">Заявки на сегодня</HeadingOfSection>
                    </div>
                    <div>
                        <H2 className="text-center mt-[8px] mb-[16px]">Надо срочно ответить!</H2>
                    </div>
                    <div className="w-3/4 TS:w-full mx-auto">
                        <Subtitle className="text-center">Здесь представлена база данных пользователей, которые оставили сегодня заявку. Число пользователей: { }</Subtitle>
                    </div>
                </div>
                <div className="mt-[40px] overflow-x-auto">
                    <TableUsers userPhones={filteredUserPhones} />
                </div>
            </section>
        </>
    );
}

export default TodayUsersSection;