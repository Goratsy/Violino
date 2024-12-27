import { FC, useContext, useEffect } from "react";
import AnimatedElementFade from "../../../components/Animation/AnimatedElementFade";
import HeadingOfSection from "../../../components/UI/text/HeadingOfSection";
import H2 from "../../../components/UI/text/H2";
import Subtitle from "../../../components/UI/text/Subtitle";
import Input from "../../../components/UI/input/Input";
import ButtonSubmit from "../../../components/UI/button/ButtonSubmit";
import { AuthentificationContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
    let {isAuthenticated, setIsAuthenticated} = useContext(AuthentificationContext);
    let navigate = useNavigate();

    useEffect(() => {
        // Authentification

        // Redirecting
        if (isAuthenticated) {
            navigate('/admin');
        }
        // Requests
    }, []);

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
                        <form action="">
                            <div className="flex flex-col gap-[30px] T:flex-col T:gap-[15px]">
                                <AnimatedElementFade animateFade="animate-fade-right" delay="animate-delay-100" additionalClasses="w-full">
                                    <Input placeholder="Логин" />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-left" delay="animate-delay-100" additionalClasses="w-full">
                                    <Input placeholder="Пароль" />
                                </AnimatedElementFade>
                            </div>
                            <AnimatedElementFade animateFade="animate-fade-up" delay="animate-delay-300" additionalClasses="mt-[30px] T:mt-[15px]">
                                <ButtonSubmit>Войти</ButtonSubmit>
                            </AnimatedElementFade>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Login;