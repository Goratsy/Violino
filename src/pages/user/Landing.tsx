import { FC } from "react";
import Header from "../../components/componentsOfPages/user/Header/Header";
import HomeSection from "../../components/componentsOfPages/user/Main/HomeSection/HomeSection";
import AboutSection from "../../components/componentsOfPages/user/Main/AboutSection/AboutSection";
import AdvantagesSection from "../../components/componentsOfPages/user/Main/AdvantagesSection/AdvantagesSection";
import FormalisationSection from "../../components/componentsOfPages/user/Main/FormalisationSection/FormalisationSection";
import Footer from "../../components/componentsOfPages/user/Footer/Footer";
import { Helmet } from "react-helmet-async";
import Cake_main from "../../assets/jpg/cake_home_section.jpg"

const Landing: FC = () => {
    return (
        <>
            <Helmet>
                <title>Виолино</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="title" content="Violino - Кафе-кондитерская: Индивидуальные заказы тортов для каждого клиента" />
                <meta name="description" content="Кафе-кондитерская Violino - идеальное место для сладкоежек! Мы создаем торты на заказ, уделяя внимание каждому клиенту и его пожеланиям. Уникальные десерты, уютная атмосфера и персональный подход – все для вас!" />
                <meta name="keywords" content="Violino, Виолино, кафе-кондитерская, торты на заказ, торты, бенто-торты, индивидуальный подход, десерты, уникальные торты, сладости, уютное кафе" />
                <meta name="author" content="Violino" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://violino-cafe.com" />
                <meta property="og:title" content="Violino - Кафе-кондитерская: Индивидуальные заказы тортов для каждого клиента" />
                <meta property="og:description" content="Кафе-кондитерская Violino - идеальное место для сладкоежек! Мы создаем торты на заказ, уделяя внимание каждому клиенту и его пожеланиям. Уникальные десерты, уютная атмосфера и персональный подход – все для вас!" />
                <meta property="og:image" content={Cake_main} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://violino-cafe.com" />
                <meta name="twitter:title" content="Violino - Кафе-кондитерская: Индивидуальные заказы тортов для каждого клиента" />
                <meta name="twitter:description" content="Кафе-кондитерская Violino - идеальное место для сладкое" />
            </Helmet>
            <Header />
            <main>
                <HomeSection />
                <AboutSection />
                <AdvantagesSection />
                <FormalisationSection />
            </main>
            <Footer />
        </>
    );
}

export default Landing;