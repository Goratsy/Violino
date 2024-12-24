import { FC } from "react";
import AnimatedElementFade from "../../../Animation/AnimatedElementFade";
import HeadingOfSection from "../../../UI/text/HeadingOfSection";
import H2 from "../../../UI/text/H2";
import Subtitle from "../../../UI/text/Subtitle";
import YandexMap from "../../../UI/map/YandexMap";

const Footer: FC = () => {
    return (
        <footer className="mt-[130px] T:mt-[100px] TS:mt-[70px] ">
            <section className="px-[12%] L:px-[20px] P:px-[10px]">
                <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[100ms]">
                    <HeadingOfSection className="text-center">Контакты</HeadingOfSection>
                </AnimatedElementFade>
                <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[200ms]">
                    <H2 className="text-center mt-[8px] mb-[16px]">Оставьте заявку</H2>
                </AnimatedElementFade>
                <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[300ms]" additionalClasses="w-3/4 TS:w-full mx-auto">
                    <Subtitle className="text-center">Оставьте ваш номер телефона для обратной связи, или свяжитесь с нами удобным для вас способом</Subtitle>
                </AnimatedElementFade>
            </section>
            <section className="">
                <div className="w-full h-[600px]">
                    <YandexMap/>
                </div>
                <div className="grid px-[12%] L:px-[20px] P:px-[10px] py-[130px] T:py-[100px] TS:py-[70px]">

                </div>
            </section>
        </footer>
    );
}

export default Footer;