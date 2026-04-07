'use client';

import { FC, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { authentificationManager, logManagerLogin } from "@/shared/api/requests";
import { useAuth } from "@/shared/lib/contexts/auth-context";
import { usePopup } from "@/shared/lib/contexts/popup-context";
import { getOSInfo } from "@/shared/lib/utils/getUserDevice";
import AnimatedElementFade from "@/shared/ui/AnimatedElementFade";
import ButtonSubmit from "@/shared/ui/button/ButtonSubmit";
import Input from "@/shared/ui/input/Input";
import H2 from "@/shared/ui/text/H2";
import HeadingOfSection from "@/shared/ui/text/HeadingOfSection";
import Subtitle from "@/shared/ui/text/Subtitle";

const Login: FC = () => {
    let { isAuthenticated, setIsAuthenticated } = useAuth();
    let { setSteckMessages } = usePopup();

    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const router = useRouter();

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
                    setSteckMessages((prevMessages) => [{ isErrorPopup: false, message: 'Регистрацию прошла успешно! Подождите...' }, ...prevMessages]);
                    localStorage.setItem('bearer_token', response.data ? response.data.token : '');
                    setIsAuthenticated(true);
                } else if (response.code >= 400 && response.code <= 499) {
                    setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Некорректно введены данные' }, ...prevMessages]);
                }
            } else {
                setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Невозможно определить ваш адрес и устрйоство, с которого вы пытаетесь зайти!' }, ...prevMessages]);
            }

        } catch (error) {
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Сервер не отвечает :( Повторите попытку позже!' }, ...prevMessages]);

        }

        setIsSubmit(false);
    }

    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/admin');
        }
    }, [isAuthenticated, router]);

    useEffect(() => {        
        const checkAuthAndFetchData = async () => {
            const auth: boolean = await getAuthentification();

            if (auth) {
                router.replace('/admin');
                return;
            }
        };

        checkAuthAndFetchData();
    }, [router]);

    return (
        <>
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
