import { FC } from "react";
import { UserPhone } from "@/entities/user-phone/model/types";
import TableUsers from "@/shared/ui/tableUsers/TableUsers";
import H2 from "@/shared/ui/text/H2";
import H3 from "@/shared/ui/text/H3";
import HeadingOfSection from "@/shared/ui/text/HeadingOfSection";
import Subtitle from "@/shared/ui/text/Subtitle";

const LastYearUserSection: FC<{ filteredUserPhones: UserPhone[] }> = ({ filteredUserPhones }) => {
    return (
        <>
            <section id="last" className="pt-[130px] T:pt-[100px] TS:pt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                <div>
                    <div>
                        <HeadingOfSection className="text-center">Прошлые заявки</HeadingOfSection>
                    </div>
                    <div>
                        <H2 className="text-center mt-[8px] mb-[16px]">Лучше перезвонить!</H2>
                    </div>
                    <div className="w-3/4 TS:w-full mx-auto">
                        <Subtitle className="text-center">Здесь представлена база данных пользователей, которые оставили заявку ровно в прошлом году. Число пользователей, прислалавших заявку: {filteredUserPhones.length}</Subtitle>
                    </div>
                </div>
                <div className="mt-[40px] overflow-x-auto">
                    {filteredUserPhones.length !== 0 ?
                        <TableUsers onlyRead={true} userPhones={filteredUserPhones} /> : <H3 className="text-center underline underline-offset-2">Пока нет заявок, которые оставили в прошлом году</H3>}
                </div>
            </section>
        </>
    );
}

export default LastYearUserSection;
