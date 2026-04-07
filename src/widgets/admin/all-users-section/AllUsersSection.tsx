import { FC } from "react";
import { UserPhone } from "@/entities/user-phone/model/types";
import TableUsers from "@/shared/ui/tableUsers/TableUsers";
import H2 from "@/shared/ui/text/H2";
import HeadingOfSection from "@/shared/ui/text/HeadingOfSection";
import Subtitle from "@/shared/ui/text/Subtitle";

const AllUsersSection: FC<{ userPhones: UserPhone[] }> = ({ userPhones }) => {
    return (
        <>
            <section id="database" className="pt-[130px] T:pt-[100px] TS:pt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                <div>
                    <div>
                        <HeadingOfSection className="text-center">Панель администрации</HeadingOfSection>
                    </div>
                    <div>
                        <H2 className="text-center mt-[8px] mb-[16px]">Добро пожаловать, </H2>
                    </div>
                    <div className="w-3/4 TS:w-full mx-auto">
                        <Subtitle className="text-center">Здесь представлена база данных всех пользователей, оставивших свои данных для их обработки. Число пользователей, прислалавших заявку: {userPhones.length}</Subtitle>
                    </div>
                </div>
                <TableUsers userPhones={userPhones} />
            </section>
        </>
    );
}

export default AllUsersSection;
