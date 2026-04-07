'use client';

import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/shared/lib/contexts/auth-context";
import { usePopup } from "@/shared/lib/contexts/popup-context";
import { getOSInfo } from "@/shared/lib/utils/getUserDevice";
import AnimatedElementFade from "@/shared/ui/AnimatedElementFade";
import ButtonSubmit from "@/shared/ui/button/ButtonSubmit";
import Input from "@/shared/ui/input/Input";
import H2 from "@/shared/ui/text/H2";
import HeadingOfSection from "@/shared/ui/text/HeadingOfSection";
import Subtitle from "@/shared/ui/text/Subtitle";
import { loginAsStaff, verifyAdminSession } from "@/features/auth/api/auth";
import { clearSession } from "@/features/auth/lib/session";

const Login: FC = () => {
    let { isAuthenticated, setIsAuthenticated } = useAuth();
    let { setSteckMessages } = usePopup();

    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const router = useRouter();

    const submitForm = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setIsSubmit(true);

        try {
            const ipAddressData = await fetch("https://api.ipify.org?format=json").then((response) => response.json() as Promise<{ ip: string }>);
            const device = getOSInfo();

            if (device && ipAddressData?.ip) {
                const response = await loginAsStaff({
                    login: username,
                    password,
                    device,
                    ipAddress: ipAddressData.ip,
                });

                if (response.staff.role !== 'admin') {
                    clearSession();
                    setIsAuthenticated(false);
                    setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'У этой учётной записи нет доступа к панели администратора' }, ...prevMessages]);
                } else {
                    setSteckMessages((prevMessages) => [{ isErrorPopup: false, message: 'Авторизация прошла успешно. Подождите...' }, ...prevMessages]);
                    setIsAuthenticated(true);
                }
            } else {
                setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Невозможно определить адрес или устройство, с которого вы пытаетесь зайти' }, ...prevMessages]);
            }

        } catch (error) {
            const message = error instanceof Error ? error.message : 'Сервер не отвечает. Повторите попытку позже';
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message }, ...prevMessages]);
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
            const auth = await verifyAdminSession();

            if (auth) {
                setIsAuthenticated(true);
                router.replace('/admin');
                return;
            }

            clearSession();
            setIsAuthenticated(false);
        };

        void checkAuthAndFetchData();
    }, [router, setIsAuthenticated]);

    const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

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
                                    <Input value={username} onChange={handleLoginChange} name="username" required type="text" placeholder="Логин" autoComplete="on" />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-left" delay="animate-delay-100" additionalClasses="w-full">
                                    <Input value={password} onChange={handlePasswordChange} name="password" required type="password" placeholder="Пароль" autoComplete="on" />
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
