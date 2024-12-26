import { FC } from "react";
import HeadingOfSection from "../../../UI/text/HeadingOfSection";
import H2 from "../../../UI/text/H2";
import Subtitle from "../../../UI/text/Subtitle";
import TableUsers from "../../../UI/tableUsers/TableUsers";

const AllUsersSection: FC = () => {
    return (
        <>
            <section className="mt-[130px] T:mt-[100px] TS:mt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                <div>
                    <div>
                        <HeadingOfSection className="text-center">Панель администрации</HeadingOfSection>
                    </div>
                    <div>
                        <H2 className="text-center mt-[8px] mb-[16px]">Добро пожаловать</H2>
                    </div>
                    <div className="w-3/4 TS:w-full mx-auto">
                        <Subtitle className="text-center">Здесь представлена база данных всех пользователей, оставивших свои данных для их обработки</Subtitle>
                    </div>
                </div>
                <div className="mt-[40px] overflow-x-auto">
                    <TableUsers users={[{}, {}, {}]} />
                </div>
            </section>
        </>
    );
}

export default AllUsersSection;