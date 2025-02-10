import { FC } from "react";
import Header from "../../components/componentsOfPages/user/Header/Header";
import HomeSection from "../../components/componentsOfPages/user/Main/HomeSection/HomeSection";
import AboutSection from "../../components/componentsOfPages/user/Main/AboutSection/AboutSection";
import AdvantagesSection from "../../components/componentsOfPages/user/Main/AdvantagesSection/AdvantagesSection";
import FormalisationSection from "../../components/componentsOfPages/user/Main/FormalisationSection/FormalisationSection";
import Footer from "../../components/componentsOfPages/user/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Landing: FC = () => {

    return (
        <>
            <Helmet>
                <title>Виолино. Торты на заказ. Кафе-кондитерская. Москва, Ленинский 79</title>
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