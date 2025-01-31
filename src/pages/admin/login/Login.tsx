import { FC, FormEvent, useContext, useEffect, useState } from "react";
import AnimatedElementFade from "../../../components/Animation/AnimatedElementFade";
import HeadingOfSection from "../../../components/UI/text/HeadingOfSection";
import H2 from "../../../components/UI/text/H2";
import Subtitle from "../../../components/UI/text/Subtitle";
import Input from "../../../components/UI/input/Input";
import ButtonSubmit from "../../../components/UI/button/ButtonSubmit";
import { AuthentificationContext, PopupContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { getOSInfo } from "../../../utils/getUserDevice";
import { authentificationManager, logManagerLogin } from "../../../api/requests/Requests";
import { Helmet } from "react-helmet-async";

const Login: FC = () => {
    let { isAuthenticated, setIsAuthenticated } = useContext(AuthentificationContext);
    let { steckMessages, setSteckMessages } = useContext(PopupContext);

    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    let navigate = useNavigate();

    const getAuthentification = async (): Promise<boolean> => {
        const response = await authentificationManager();
        return response.code == 200;
    }

    const submitForm = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setIsSubmit(true);

        try {
            let ip_address = await fetch("https://api.ipify.org?format=json").then((response) => response.json());
            const device = getOSInfo();

            if (device && ip_address) {
                let date = new Date();
                let response = await logManagerLogin({ login: username, password, date_of_login: `${('0' + String(date.getDate())).slice(-2)}.${('0' + String(date.getMonth() + 1)).slice(-2)}.${date.getFullYear()} ${('0' + String(date.getHours())).slice(-2)}:${('0' + String(date.getMinutes())).slice(-2)}:${('0' + String(date.getSeconds())).slice(-2)}`, device, ip_address: ip_address.ip });

                if (response.code >= 200 && response.code <= 299) {
                    setSteckMessages([{ isErrorPopup: false, message: 'Регистрацию прошла успешно! Подождите...' }, ...(steckMessages || [])]);
                    localStorage.setItem('bearer_token', response.data ? response.data.token : '');
                    setIsAuthenticated(true);
                } else if (response.code >= 400 && response.code <= 499) {
                    setSteckMessages([{ isErrorPopup: true, message: 'Некорректно введены данные' }, ...(steckMessages || [])]);
                }
            } else {
                setSteckMessages([{ isErrorPopup: true, message: 'Невозможно определить ваш адрес и устрйоство, с которого вы пытаетесь зайти!' }, ...(steckMessages || [])]);
            }

        } catch (error) {
            setSteckMessages([{ isErrorPopup: true, message: 'Сервер не отвечает :( Повторите попытку позже!' }, ...(steckMessages || [])]);

        }

        setIsSubmit(false);
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin');
        }
    }, [isAuthenticated]);

    useEffect(() => {        
        const checkAuthAndFetchData = async () => {
            const auth: boolean = await getAuthentification();

            if (auth) {
                navigate('/admin');
                return;
            }
        };

        checkAuthAndFetchData();
    }, []);

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
                <title>Панель администратора</title>
            </Helmet>
            <main className="h-[100vh] w-full min-h-[700px] flex items-center justify-center">
                <section className="px-[12%] L:px-[20px] P:px-[10px]">
                    <div>
                        <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[100ms]">
                            <HeadingOfSection className="text-center">Панель администрации</HeadingOfSection>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[200ms]">
                            <H2 className="text-center mt-[8px] mb-[16px]">Вход в админку</H2>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[300ms]" additionalClasses="w-3/4 TS:w-full mx-auto">
                            <Subtitle className="text-center">Чтобы войти в панель управления, нужно вести логин и пароль</Subtitle>
                        </AnimatedElementFade>
                    </div>
                    <div className="mt-[40px] TS:mt-[30px] P:mt-[20px] ">
                        <form action="/admin/login" method="POST" onSubmit={submitForm}>
                            <div className="flex flex-col gap-[30px] T:flex-col T:gap-[15px]">
                                <AnimatedElementFade animateFade="animate-fade-right" delay="animate-delay-100" additionalClasses="w-full">
                                    <Input value={username} onInput={(event: any) => { setUserName(event.target.value); }} name="username" required type="text" placeholder="Логин" autoComplete="on" />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-left" delay="animate-delay-100" additionalClasses="w-full">
                                    <Input value={password} onInput={(event: any) => { setPassword(event.target.value); }} name="password" required type="password" placeholder="Пароль" autoComplete="on" />
                                </AnimatedElementFade>
                            </div>
                            <AnimatedElementFade animateFade="animate-fade-up" delay="animate-delay-300" additionalClasses="mt-[30px] T:mt-[15px]" threshold={0}>
                                <ButtonSubmit disabled={isSubmit} type="submit">{!isSubmit ? 'Войти' : 'Войти...'}</ButtonSubmit>
                            </AnimatedElementFade>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Login;