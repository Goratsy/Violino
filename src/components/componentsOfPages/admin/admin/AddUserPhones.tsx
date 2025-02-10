import { FC, FormEvent, useContext, useState } from "react";
import HeadingOfSection from "../../../UI/text/HeadingOfSection";
import H2 from "../../../UI/text/H2";
import Subtitle from "../../../UI/text/Subtitle";
import { InputMask } from "primereact/inputmask";
import Input from "../../../UI/input/Input";
import ButtonSubmit from "../../../UI/button/ButtonSubmit";
import Textarea from "../../../UI/textarea/Textarea";
import { PopupContext } from "../../../../App";
import { createUserPhone } from "../../../../api/requests/Requests";


const AddUserPhones: FC = () => {
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
            const response = await createUserPhone({ name: userName, phone: userPhone, date_of_send: `${('0' + String(date.getDate() - 1)).slice(-2)}.${('0' + String(date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`, information_about_user: userMessage })
            if (response.code >= 200 && response.code <= 299) {
                setSteckMessages([{ isErrorPopup: false, message: 'Данные успешно сохранены' }, ...(steckMessages || [])]);
                setTimeout(() => { location.reload(); }, 1000);
            } else if (response.code === 400) {
                setSteckMessages([{ isErrorPopup: true, message: 'Такой номер уже существует!' }, ...(steckMessages || [])]);
            }
        } catch (error) {
            setSteckMessages([{ isErrorPopup: true, message: 'Невозможно отправить данные. Повторите попытку позже' }, ...(steckMessages || [])]);
        }
    }

    return (
        <>
            <section id="add" className="pt-[130px] T:pt-[100px] TS:pt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                <div>
                    <HeadingOfSection className="text-center">Контакты</HeadingOfSection>
                    <H2 className="text-center mt-[8px] mb-[16px]">Оставьте заявку</H2>
                    <div className="w-3/4 TS:w-full mx-auto">
                        <Subtitle className="text-center">Хотите узнать больше? Оставьте номер или позвоните — расскажем о мастер-классах и увлекательных активностях!</Subtitle>
                    </div>
                </div>
                <div className="mt-[40px] TS:mt-[30px] P:mt-[20px] ">
                    <form action="/" method="POST" onSubmit={sendUserPhone}>
                        <div className="flex flex-row gap-[30px] T:flex-col T:gap-[15px]">

                            <Input
                                placeholder="Имя*"
                                type="text"
                                name="userName"
                                maxLength={25}
                                minLength={3}
                                additionalClass={`${isNameInputError ? 'border-red-300 hover:border-red-400 w-full' : ''}`}
                                onInput={(event: any) => { setUserName(event.target.value); setIsNameInputError(false); }} value={userName}
                            />


                            <InputMask
                                mask="+7 (999) 999-99-99"
                                onChange={(event: any) => { setUserPhone(event.target.value); setIsPhoneInputError(false); }}
                                value={userPhone}
                                placeholder="Телефон*"
                                name="userPhone"
                                className={`w-full bg-white border border-accent hover:border-accentHover hover:bg-[#fffcfa] text-secondary font-normal duration-500 ease-in-out transition-colors placeholder:text-secondary text-[16px] py-[20px] px-[20px] TS:text-[14px] TS:py-[16px] TS:px-[15px] P:text-[16px] P:py-[20px] P:px-[20px] ${isPhoneInputError ? 'border-red-300 hover:border-red-400' : ''}`}
                            />

                        </div>
                        <div className="my-[30px] T:my-[15px]">

                            <Textarea
                                placeholder="Сообщение..."
                                name="userMessage"
                                onInput={(event: any) => { setUserMessage(event.target.value); }} value={userMessage}
                                maxLength={300}
                            />

                        </div>

                        <ButtonSubmit type="submit">Отправить</ButtonSubmit>

                    </form>
                </div>
            </section>
        </>
    );
}

export default AddUserPhones;