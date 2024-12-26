import { FC } from "react";
import HeadingOfSection from "../../../UI/text/HeadingOfSection";
import H2 from "../../../UI/text/H2";
import Subtitle from "../../../UI/text/Subtitle";
import H4 from "../../../UI/text/H4";
import TextMain from "../../../UI/text/TextMain";
import { Manager } from "../../../../models/Manager";


const LoginHistory: FC<{ managers: Manager[] }> = ({ managers }) => {
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
                    {managers.map((manager, number) => {
                        return (
                            <>
                                <div className="flex flex-col gap-4 mt-6" key={manager.manager_id}>
                                    <H4>Менеджер {number} | {manager.manager_name}</H4>
                                    <div className="flex flex-col gap-1">
                                        {manager.loginHistory ?
                                            <>
                                                {manager.loginHistory.map((history) => {
                                                    return (
                                                        <div key={`${manager.manager_id}_history_${history.device}`} className="flex flex-row gap-11">
                                                            <TextMain className="whitespace-nowrap w-64">Устройство: {history.device}</TextMain>
                                                            <TextMain className="whitespace-nowrap w-28">IP:{history.ip_address}</TextMain>
                                                            <TextMain className="whitespace-nowrap w-52">Дата входа: {history.date_of_login}</TextMain>
                                                        </div>
                                                    );
                                                })}
                                            </>
                                            : ''}
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default LoginHistory;