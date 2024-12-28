import { FC, FormEvent, useContext, useEffect, useState } from "react";
import AnimatedElementFade from "../../../components/Animation/AnimatedElementFade";
import HeadingOfSection from "../../../components/UI/text/HeadingOfSection";
import H2 from "../../../components/UI/text/H2";
import Subtitle from "../../../components/UI/text/Subtitle";
import Input from "../../../components/UI/input/Input";
import ButtonSubmit from "../../../components/UI/button/ButtonSubmit";
import { AuthentificationContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { getOSInfo } from "../../../utils/getUserDevice";
import { logManagerLogin } from "../../../api/requests/Requests";
import { Helmet } from "react-helmet-async";

const Login: FC = () => {
    const [ip_address, setIp_address] = useState("");
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    let { isAuthenticated, setIsAuthenticated } = useContext(AuthentificationContext);
    let navigate = useNavigate();

    const submitForm = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setIsSubmit(true);

        try {
            await fetch("https://api.ipify.org?format=json")
                .then((response) => response.json())
                .then((data) => setIp_address(data.ip))
                .catch((error) => console.error("Ошибка получения IP-адреса:", error));

            const device = getOSInfo()

            if (device && ip_address || true) { // !!! Убрать true при prod !!!
                console.log({ login: username, password: password, date_of_login: String(Date.now()), device, ip_address });
                let response_log = await logManagerLogin({ login: username, password: password, date_of_login: String(Date.now()), device, ip_address });

                if (response_log.code >= 200 && response_log.code <= 299) {
                    window.localStorage.setItem('bearer_token', (response_log.data ? response_log.data.token : ''));
                    setIsAuthenticated(true);
                } else {
                    alert("Невозможно отправить данные. Повторите попытку позже");
                }


            } else {
                alert("Невозможно отправить данные. Повторите попытку позже");
            }

        } catch (error) {
            alert("Произошла ошибка: " + String(error));
        }

        setIsSubmit(false);
    }

    useEffect(() => {
        // Authentification
        // Redirecting
        if (isAuthenticated) {
            navigate('/admin');
            return;
        }
    }, [isAuthenticated]);

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
                                    <Input value={username} onChange={(event: any) => { setUserName(event.target.value); }} name="username" required type="text" placeholder="Логин" autoComplete="on" />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-left" delay="animate-delay-100" additionalClasses="w-full">
                                    <Input value={password} onChange={(event: any) => { setPassword(event.target.value); }} name="password" required type="password" placeholder="Пароль" autoComplete="on" />
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