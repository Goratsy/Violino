import { FC } from "react";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H2 from "../../../../UI/text/H2";
import cake_advantage from '../../../../../assets/jpg/cake_advantage.jpg';
import eco_SVG from '../../../../../assets/svg/eco.svg';
import brush_SVG from '../../../../../assets/svg/brush.svg';
import person_SVG from '../../../../../assets/svg/person.svg';
import H4 from "../../../../UI/text/H4";
import TextMain from "../../../../UI/text/TextMain";




const AdvantagesSection: FC = () => {
    return (
        <>
            <section id="advantagesSection" className="pt-[130px] T:pt-[100px] TS:pt-[70px]">
                <div className="w-full bg-surface py-[40px] mb-[40px] TS:mb-[30px]">
                    <div className="animate-fade-down animate-duration-600 animate-ease-in-out animate-delay-[200ms]">
                        <HeadingOfSection align="text-center">Наши преимущества</HeadingOfSection>
                    </div>
                    <div className="mt-[4px] animate-fade-down animate-duration-600 animate-ease-in-out animate-delay-[100ms]">
                        <H2 align="text-center">Воплощаем ваши мечты!</H2>
                    </div>
                </div>
                <div className="flex justify-center items-center TS:flex-col-reverse gap-[75px] TS:gap-[50px] px-[12%] L:px-[20px] P:px-[10px]">
                    <div className="w-1/2 TS:w-full flex flex-col gap-[70px] TS:gap-[50px] TS:px-[40px] P:px-0">
                        <div className="flex items-start gap-[50px] TS:gap-[30px] P:gap-[7%] animate-fade-left animate-duration-600 animate-ease-in-out animate-delay-[300ms]">
                            <img src={person_SVG} alt="person_icon" className="P:w-[15vw] P:h-auto" />
                            <div>
                                <div className="text-nowrap P:text-wrap">
                                    <H4>Авторские рецепты</H4>
                                </div>
                                <div className="mt-[10px]">
                                    <TextMain>Уникальные рецепты, созданные с душой, чтобы каждые из них дарили незабываемые впечатления</TextMain>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-[50px] TS:gap-[30px] P:gap-[7%] animate-fade-left animate-duration-600 animate-ease-in-out animate-delay-[200ms]">
                            <img src={eco_SVG} alt="eco_icon" className="P:w-[15vw] P:h-auto" />
                            <div>
                                <div className="text-nowrap P:text-wrap">
                                    <H4>Натуральный состав</H4>
                                </div>
                                <div className="mt-[10px]">
                                    <TextMain>Используем только натуральные ингредиенты, чтобы десерты были вкусными, полезными и безопасными</TextMain>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-[50px] TS:gap-[30px] P:gap-[7%] animate-fade-left animate-duration-600 animate-ease-in-out animate-delay-[100ms]">
                            <img src={brush_SVG} alt="brush_icon" className="P:w-[15vw] P:h-auto" />
                            <div>
                                <div className="text-nowrap P:text-wrap">
                                    <H4>Актуальный дизайн</H4>
                                </div>
                                <div className="mt-[10px]">
                                    <TextMain>Современные оформления, отражающие тренды и подчеркивающие эстетику каждого праздничного момента</TextMain>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 TS:w-full animate-fade animate-duration-500 animate-ease-in-out animate-delay-[200ms]">
                        <img src={cake_advantage} alt="cake_advantage" className="w-full" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdvantagesSection;