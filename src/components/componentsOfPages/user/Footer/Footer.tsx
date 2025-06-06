import { FC, FormEvent, useContext, useState } from "react";
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
import H3 from "../../../UI/text/H3";
import NetworkLinks from "../../../UI/networkLinks/NetworkLinks";
import smartPhone_SVG from '../../../../assets/svg/smartphone.svg';
import gmail_SVG from '../../../../assets/svg/gmail.svg';
import { InputMask } from 'primereact/inputmask';
import { createUserPhone } from "../../../../api/requests/Requests";
import { PopupContext } from "../../../../App";
;

const Footer: FC = () => {
    let [userName, setUserName] = useState<string>('');
    let [userPhone, setUserPhone] = useState<string>('');
    let [userMessage, setUserMessage] = useState<string>('');
    let [isNameInputError, setIsNameInputError] = useState<boolean>(false);
    let [isPhoneInputError, setIsPhoneInputError] = useState<boolean>(false);

    let { steckMessages, setSteckMessages } = useContext(PopupContext);

    const sendUserPhone = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const patternName = /^[A-Za-zА-Яа-яЁё\s]+$/;
        if (!patternName.test(userName)) {
            setIsNameInputError(true);
            setSteckMessages([{ isErrorPopup: true, message: 'Введите имя без специальных символов и цифр' }, ...(steckMessages || [])]);
            return;
        }
        
        if (userPhone.replace(/[^0-9]/g, "").length !== 11) {
            setIsPhoneInputError(true);
            setSteckMessages([{ isErrorPopup: true, message: 'Введите корректный номер телефона' }, ...(steckMessages || [])]);
            return;
        }
        
        try {
            let date = new Date();
            const response = await createUserPhone({ name: userName, phone: userPhone, date_of_send:`${('0' + String(date.getDate())).slice(-2)}.${('0' + String(date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`, information_about_user: userMessage })
            if (response.code >= 200 && response.code <= 299) {
                setSteckMessages([{ isErrorPopup: false, message: 'Данные успешно сохранены' }, ...(steckMessages || [])]);
            } else if (response.code === 400) {
                setSteckMessages([{ isErrorPopup: true, message: 'Данные не могут быть сохранены' }, ...(steckMessages || [])]);            
            }
        } catch (error) {
            setSteckMessages([{ isErrorPopup: true, message: 'Невозможно отправить данные. Повторите попытку позже' }, ...(steckMessages || [])]);
        }
    }

    return (
        <>
            <footer id="contacts" className="pt-[130px] T:pt-[100px] TS:pt-[70px]">
                <section className="px-[12%] L:px-[20px] P:px-[10px]">
                    <div>
                        <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[100ms]">
                            <HeadingOfSection className="text-center">Контакты</HeadingOfSection>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[200ms]">
                            <H2 className="text-center mt-[8px] mb-[16px]">Оставьте заявку</H2>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[300ms]" additionalClasses="w-3/4 TS:w-full mx-auto">
                            <Subtitle className="text-center">Хотите узнать больше? Оставьте номер или позвоните — расскажем о мастер-классах и увлекательных активностях!</Subtitle>
                        </AnimatedElementFade>
                    </div>
                    <div className="mt-[40px] TS:mt-[30px] P:mt-[20px] ">
                        <form action="/" method="POST" onSubmit={sendUserPhone}>
                            <div className="flex flex-row gap-[30px] T:flex-col T:gap-[15px]">
                                <AnimatedElementFade animateFade="animate-fade-right" threshold={0.6} delay="animate-delay-100" additionalClasses="w-full">
                                    <Input
                                        placeholder="Имя*"
                                        type="text"
                                        name="userName"
                                        maxLength={25}
                                        minLength={3}
                                        additionalClass={`${isNameInputError ? 'border-red-300 hover:border-red-400' : ''}`}
                                        onInput={(event: any) => { setUserName(event.target.value); setIsNameInputError(false); }} value={userName}
                                    />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-left" threshold={0.6} delay="animate-delay-100" additionalClasses="w-full">
                                    <InputMask
                                        mask="+7 (999) 999-99-99"
                                        onChange={(event: any) => { setUserPhone(event.target.value); setIsPhoneInputError(false); }}
                                        value={userPhone}
                                        placeholder="Телефон*"
                                        name="userPhone"
                                        className={`w-full bg-white border border-accent hover:border-accentHover hover:bg-[#fffcfa] text-secondary font-normal duration-500 ease-in-out transition-colors placeholder:text-secondary text-[16px] py-[20px] px-[20px] TS:text-[14px] TS:py-[16px] TS:px-[15px] P:text-[16px] P:py-[20px] P:px-[20px] ${isPhoneInputError ? 'border-red-300 hover:border-red-400' : ''}`}
                                    />
                                </AnimatedElementFade>
                            </div>
                            <div className="my-[30px] T:my-[15px]">
                                <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                    <Textarea
                                        placeholder="Сообщение..."
                                        name="userMessage"
                                        onInput={(event: any) => { setUserMessage(event.target.value); }} value={userMessage}
                                        maxLength={300}
                                    />
                                </AnimatedElementFade>
                            </div>
                            <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                <ButtonSubmit type="submit">Отправить</ButtonSubmit>
                            </AnimatedElementFade>
                        </form>
                    </div>
                </section>
                <section className="mt-[130px] T:mt-[100px] TS:mt-[70px]">
                    <AnimatedElementFade animateFade="animate-fade" threshold={0.4} delay="animate-delay-300" additionalClasses="w-full max-h-[600px]">
                        <YandexMap />
                    </AnimatedElementFade>
                    <div className="flex flex-row items-start justify-center L:flex-col L:items-center gap-[80px] L:gap-y-[40px] py-[130px] T:py-[100px] TS:py-[70px] text-nowrap">
                        <div className="flex justify-between flex-row P:flex-col gap-[80px] L:gap-[70px] TS:gap-[30px] ">
                            <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[100ms]" additionalClasses="flex flex-col gap-[14px] L:w-[200px] -translate-y-2 L:translate-x-0">
                                <Logo></Logo>
                                <TextFooter fontWeight="font-semibold">Москва<br />
                                    Ленинский проспект, 79</TextFooter>
                            </AnimatedElementFade>
                            <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[200ms]" additionalClasses="flex flex-col gap-[30px] L:w-[200px]">
                                <H3>Контакты</H3>
                                <div>
                                    <div className="flex items-center ">
                                        <div className="inline-block w-[20px] mr-2">
                                            <img src={smartPhone_SVG} alt="smartphone" className="w-auto h-[19px]" />
                                        </div>
                                        <TextFooter>+7 (915) 331-24-31</TextFooter>
                                    </div>
                                    <div className="flex items-center mt-[10px]">
                                        <div className="inline-block w-[20px] mr-2">
                                            <img src={gmail_SVG} alt="gmail" className="w-[19px] h-auto" />
                                        </div>
                                        <TextFooter>viotort@gmail.com</TextFooter>
                                    </div>
                                </div>
                            </AnimatedElementFade>
                        </div>
                        <div className="flex justify-between flex-row P:flex-col gap-[80px] L:gap-[70px] TS:gap-[30px] ">
                            <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[300ms]" additionalClasses="flex flex-col gap-[30px] L:w-[200px]">
                                <H3>График работы</H3>
                                <div>
                                    <div>
                                        <TextFooter>Пн-Пт с 9 до 20</TextFooter>
                                    </div>
                                    <div className="mt-[10px]">
                                        <TextFooter>Сб-Вс с 10 до 20</TextFooter>
                                    </div>
                                </div>
                            </AnimatedElementFade>
                            <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[400ms]" additionalClasses="flex flex-col gap-[30px] L:w-[200px]">
                                <H3>Полезные ссылки</H3>
                                <div>
                                    <div>
                                        <TextFooter>Контакты для связи:</TextFooter>
                                    </div>
                                    <div className="mt-[20px]">
                                        <NetworkLinks />
                                    </div>
                                </div>
                            </AnimatedElementFade>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;