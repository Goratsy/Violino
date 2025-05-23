import { FC } from "react";
import Carousel from "../../../../UI/carousel/Carousel";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H1 from "../../../../UI/text/H1";
import Subtitle from "../../../../UI/text/Subtitle";
import ButtonLink from "../../../../UI/button/ButtonLink";
import home_bg_PNG from "../../../../../assets/png/home_bg.png";
import AnimatedElementFade from "../../../../Animation/AnimatedElementFade";

const HomeSection: FC = () => {
    return (
        <>
            <div className="absolute w-full h-[100vh] z-0 T:h-[50vh] LS:min-h-[700px] TS:hidden">
                <div className="absolute w-full h-full overflow-hidden">
                    <img src={home_bg_PNG} alt="" className="absolute w-[40%] L:w-[50%] T:w-[58%] h-auto right-0 top-0 -translate-y-44 translate-x-36" />
                </div>
                <img src={home_bg_PNG} alt="" className="absolute w-[40%] L:w-[50%] T:w-[58%] h-auto bottom-0 -left-[15rem] translate-y-44" />
            </div>
            <section id="homeSection" className="h-[100vh] L:h-auto LS:min-h-[700px] pt-[110px] L:pt-[160px] pl-[12%] L:pl-0 relative flex flex-row L:flex-col items-center gap-[75px] L:gap-[100px] z-10 ">
                <div className="w-[40%] L:w-full">
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[450ms]">
                        <HeadingOfSection className="text-left mb-[4px] L:text-center">Главная</HeadingOfSection>
                    </AnimatedElementFade>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[350ms]">
                        <H1 className="text-left L:hidden" textWrap="text-nowrap ">Торты<br /> на заказ</H1>
                        <H1 className="text-center hidden L:block" textWrap="text-nowrap">Торты на заказ</H1>
                    </AnimatedElementFade>
                    <div className="pl-[40px] mt-[15px] L:p-0 L:flex L:items-center L:flex-col">
                        <AnimatedElementFade animateFade="animate-fade-down" additionalClasses="L:w-3/4 TS:w-[80%]" delay="animate-delay-[250ms]">
                            <Subtitle className="text-left L:text-center">Виолино воплощает ваши сладкие мечты в реальность, создавая изысканные торты и десерты. Стоимость — 2500 рублей за килограмм</Subtitle>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-down" additionalClasses="w-[164px] mt-[30px] P:w-[120px]" delay="animate-delay-[150ms]">
                            <ButtonLink href="#contacts">Заказать</ButtonLink>
                        </AnimatedElementFade>
                    </div>
                </div>
                <div className="w-[60%] h-full z-40 L:hidden">
                    <Carousel></Carousel>
                </div>
            </section>
            <div className="hidden L:block L:w-full L:pt-[140px] L:h-[1100px] TS:h-[1100px] P:h-[600px]  z-40">
                <Carousel></Carousel>
            </div>
        </>
    );
}

export default HomeSection;