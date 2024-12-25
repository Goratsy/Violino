import { FC } from "react";
import AnimatedElementFade from "../../../Animation/AnimatedElementFade";
import HeadingOfSection from "../../../UI/text/HeadingOfSection";
import H2 from "../../../UI/text/H2";
import Subtitle from "../../../UI/text/Subtitle";
import YandexMap from "../../../UI/map/YandexMap";
import Input from "../../../UI/input/Input";
import Textarea from "../../../UI/textarea/Textarea";
import ButtonSubmit from "../../../UI/button/ButtonSubmit";
import Logo from "../../../UI/logo/Logo";
import TextFooter from "../../../UI/text/TextFooter";
import H4 from "../../../UI/text/H4";
import NetworkLinks from "../../../UI/networkLinks/NetworkLinks";

const Footer: FC = () => {
    return (
        <footer className="mt-[130px] T:mt-[100px] TS:mt-[70px] ">
            <section className="px-[12%] L:px-[20px] P:px-[10px]">
                <div>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[100ms]">
                        <HeadingOfSection className="text-center">Контакты</HeadingOfSection>
                    </AnimatedElementFade>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[200ms]">
                        <H2 className="text-center mt-[8px] mb-[16px]">Оставьте заявку</H2>
                    </AnimatedElementFade>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[300ms]" additionalClasses="w-3/4 TS:w-full mx-auto">
                        <Subtitle className="text-center">Оставьте ваш номер телефона для обратной связи, или свяжитесь с нами удобным для вас способом</Subtitle>
                    </AnimatedElementFade>
                </div>
                <div className="mt-[40px] TS:mt-[30px] P:mt-[20px] ">
                    <form action="">
                        <div className="flex flex-row gap-[30px] T:flex-col T:gap-[15px]">
                            <Input placeholder="Имя" />
                            <Input placeholder="Телефон" />
                        </div>
                        <div className="my-[30px] T:my-[15px]">
                            <Textarea placeholder="Сообщение, которое вы хотели бы передать..." />
                        </div>
                        <ButtonSubmit>Отправить</ButtonSubmit>
                    </form>
                </div>
            </section>
            <section className="mt-[130px] T:mt-[100px] TS:mt-[70px]">
                <div className="w-full h-[600px]">
                    <YandexMap />
                </div>
                <div className="flex justify-center items-start L:flex-wrap gap-[70px] L:gap-x-[100px] L:gap-y-[50px] P:gap-x-0 P:gap-y-[40px] px-[12%] L:px-[20px] P:px-[10px] py-[130px] T:py-[100px] TS:py-[70px] text-nowrap">
                    <div className="flex gap-[70px] justify-start items-start">
                        <div className="flex flex-col gap-[14px]">
                            <Logo></Logo>
                            <TextFooter fontWeight="font-semibold">Москва<br />
                                Ленинский проспект, 79</TextFooter>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <H4>Контакты</H4>
                            <div>
                                <div>
                                    <img src="" alt="" />
                                    <TextFooter>+7 (915) 331-45-31</TextFooter>
                                </div>
                                <div className="mt-[6px]">
                                    <img src="" alt="" />
                                    <TextFooter>viotort@gmail.com</TextFooter>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[70px] justify-start items-start">
                        <div className="flex flex-col gap-[30px]">
                            <H4>График работы</H4>
                            <div>
                                <div>
                                    <TextFooter>Пн-Пт с 9 до 20</TextFooter>
                                </div>
                                <div className="mt-[6px]">
                                    <TextFooter>Сб-Вс с 10 до 20</TextFooter>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <H4>Полезные ссылки</H4>
                            <div>
                                <div>
                                    <TextFooter>Контакты для связи:</TextFooter>
                                </div>
                                <div className="mt-[6px]">
                                    <NetworkLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;