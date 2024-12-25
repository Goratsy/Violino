import { FC } from "react";
import HeadingOfSection from "../../../components/UI/text/HeadingOfSection";
import H2 from "../../../components/UI/text/H2";
import Subtitle from "../../../components/UI/text/Subtitle";
import TableUsers from "../../../components/componentsOfPages/admin/admin/TableUsers";

const Admin: FC = () => {
    return (
        <>
            <main>
                <section className="mt-[130px] T:mt-[100px] TS:mt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                    <div>
                        <div>
                            <HeadingOfSection className="text-center">Панель администрации</HeadingOfSection>
                        </div>
                        <div>
                            <H2 className="text-center mt-[8px] mb-[16px]">Вход в админку</H2>
                        </div>
                        <div className="w-3/4 TS:w-full mx-auto">
                            <Subtitle className="text-center">Чтобы войти в панель управления, нужно вести логин и пароль</Subtitle>
                        </div>
                    </div>
                    <div className="mt-[40px]">
                        <TableUsers users={[{}, {}, {}]}/>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Admin;