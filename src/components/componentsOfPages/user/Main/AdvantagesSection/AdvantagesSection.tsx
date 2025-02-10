import { FC } from "react";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H2 from "../../../../UI/text/H2";
import cake_advantage from '../../../../../assets/webp/cake_advantage.webp';
import eco_SVG from '../../../../../assets/svg/eco.svg';
import brush_SVG from '../../../../../assets/svg/brush.svg';
import person_SVG from '../../../../../assets/svg/person.svg';
import H3 from "../../../../UI/text/H3";
import TextMain from "../../../../UI/text/TextMain";
import AnimatedElementFade from "../../../../Animation/AnimatedElementFade";

const AdvantagesSection: FC = () => {
    return (
        <>
            <section id="advantagesSection" className="relative mt-[130px] T:mt-[100px] TS:mt-[70px]">
                <div className="w-full bg-surface py-[40px] mb-[40px] TS:mb-[30px] selection:bg-accent selection:text-white">
                    <AnimatedElementFade animateFade="animate-fade-down" threshold={0.8} delay="animate-delay-[100ms]">
                        <HeadingOfSection className="text-center">Наши преимущества</HeadingOfSection>
                    </AnimatedElementFade>
                    <AnimatedElementFade animateFade="animate-fade-down" threshold={0.8} additionalClasses="mt-[4px]" delay="animate-delay-[100ms]">
                        <H2 className="text-center">Воплощаем ваши мечты!</H2>
                    </AnimatedElementFade>
                </div>
                <div className="flex justify-center items-center TS:flex-col-reverse gap-[75px] TS:gap-[50px] px-[12%] L:px-[20px] P:px-[10px]">
                    <div className="w-1/2 TS:w-full flex flex-col gap-[70px] TS:gap-[50px] TS:px-[40px] P:px-0">
                        <AnimatedElementFade animateFade="animate-fade-left" threshold={0.7} additionalClasses="flex items-center gap-[50px] TS:gap-[30px] P:gap-[7%]" delay="animate-delay-[100ms]">
                            <img src={person_SVG} alt="person_icon" className="P:w-[15vw] P:h-auto" />
                            <div>
                                <div className="text-nowrap P:text-wrap">
                                    <H3>Авторские рецепты</H3>
                                </div>
                                <div className="mt-[10px]">
                                    <TextMain>Уникальные рецепты, созданные с душой, чтобы каждые из них дарили незабываемые впечатления</TextMain>
                                </div>
                            </div>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-left" threshold={0.7} additionalClasses="flex items-center gap-[50px] TS:gap-[30px] P:gap-[7%]" delay="animate-delay-[100ms]">
                            <img src={eco_SVG} alt="eco_icon" className="P:w-[15vw] P:h-auto" />
                            <div>
                                <div className="text-nowrap P:text-wrap">
                                    <H3>Натуральный состав</H3>
                                </div>
                                <div className="mt-[10px]">
                                    <TextMain>Используем только натуральные ингредиенты, чтобы десерты были вкусными, полезными и безопасными</TextMain>
                                </div>
                            </div>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-left" threshold={0.7} additionalClasses="flex items-center gap-[50px] TS:gap-[30px] P:gap-[7%]" delay="animate-delay-[100ms]">
                            <img src={brush_SVG} alt="brush_icon" className="P:w-[15vw] P:h-auto" />
                            <div>
                                <div className="text-nowrap P:text-wrap">
                                    <H3>Актуальный дизайн</H3>
                                </div>
                                <div className="mt-[10px]">
                                    <TextMain>Современные оформления, отражающие тренды и подчеркивающие эстетику каждого праздничного момента</TextMain>
                                </div>
                            </div>
                        </AnimatedElementFade>
                    </div>
                    <AnimatedElementFade animateFade="animate-fade" threshold={0.5} additionalClasses="w-1/2 TS:w-full" delay="animate-delay-[100ms]">
                        <img src={cake_advantage} alt="cake_advantage" className="w-full" loading="lazy"/>
                    </AnimatedElementFade>
                </div>
            </section>
        </>
    );
}

export default AdvantagesSection;