import { FC } from "react";
import HeadingOfSection from "../../../UI/text/HeadingOfSection";
import H2 from "../../../UI/text/H2";
import Subtitle from "../../../UI/text/Subtitle";
import H4 from "../../../UI/text/H4";
import TextMain from "../../../UI/text/TextMain";


const LoginHistory: FC = () => {
    return (
        <>
            <section id="manager" className="mt-[130px] T:mt-[100px] TS:mt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                <div>
                    <div>
                        <HeadingOfSection className="text-center">История входов</HeadingOfSection>
                    </div>
                    <div>
                        <H2 className="text-center mt-[8px] mb-[16px]">Все устройства и время входа</H2>
                    </div>
                    <div className="w-3/4 TS:w-full mx-auto">
                        <Subtitle className="text-center">Здесь представлена база данных всех менеджеров, представлены последнее время входа, устройства, с которых вошли</Subtitle>
                    </div>
                </div>
                <div className="mt-[40px] overflow-x-auto">
                    <div className="flex flex-col gap-4 mt-6">
                        <H4>Менеджер 1 | Имя</H4>
                        <div className="flex flex-col gap-1">
                            <TextMain>device</TextMain>
                            <TextMain>ip address</TextMain>
                            <TextMain>last login date</TextMain>
                        </div>
                        <div className="flex flex-col gap-1">
                            <TextMain>device</TextMain>
                            <TextMain>ip address</TextMain>
                            <TextMain>last login date</TextMain>
                        </div>
                        <div className="flex flex-col gap-1">
                            <TextMain>device</TextMain>
                            <TextMain>ip address</TextMain>
                            <TextMain>last login date</TextMain>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-6">
                        <H4>Менеджер 1 | Имя</H4>
                        <div className="flex flex-col gap-1">
                            <TextMain>device</TextMain>
                            <TextMain>ip address</TextMain>
                            <TextMain>last login date</TextMain>
                        </div>
                        <div className="flex flex-col gap-1">
                            <TextMain>device</TextMain>
                            <TextMain>ip address</TextMain>
                            <TextMain>last login date</TextMain>
                        </div>
                        <div className="flex flex-col gap-1">
                            <TextMain>device</TextMain>
                            <TextMain>ip address</TextMain>
                            <TextMain>last login date</TextMain>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginHistory;