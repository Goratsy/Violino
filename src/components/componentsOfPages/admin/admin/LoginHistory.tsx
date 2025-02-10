import { FC } from "react";
import HeadingOfSection from "../../../UI/text/HeadingOfSection";
import H2 from "../../../UI/text/H2";
import Subtitle from "../../../UI/text/Subtitle";
import H3 from "../../../UI/text/H3";
import TextMain from "../../../UI/text/TextMain";
import { ManagerJoinLoginHistory } from "../../../../models/ManagerJoinLoginHistory";

const LoginHistory: FC<{ managers: ManagerJoinLoginHistory[] }> = ({ managers }) => {
    return (
        <>
            <section id="manager" className="pt-[130px] T:pt-[100px] TS:pt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
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
                    {managers.map((manager, number) => {
                        return (
                            <div className="flex flex-col gap-4 py-6 border-b" key={`${manager.manager_id}-${manager.ip_address}`}>
                                <H3>Вход {number + 1} | {manager.manager_name} | ID {manager.manager_id}</H3>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-row gap-11">
                                        <TextMain className="whitespace-nowrap w-64">Устройство: {manager.device}</TextMain>
                                        <TextMain className="whitespace-nowrap w-40">IP: {manager.ip_address}</TextMain>
                                        <TextMain className="whitespace-nowrap w-52">Дата входа: {manager.date_of_login}</TextMain>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default LoginHistory;