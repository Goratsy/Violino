import { FC } from "react";
import Header from "../../components/componentsOfPages/user/Header/Header";
import HomeSection from "../../components/componentsOfPages/user/Main/HomeSection/HomeSection";
import AboutSection from "../../components/componentsOfPages/user/Main/AboutSection/AboutSection";
import AdvantagesSection from "../../components/componentsOfPages/user/Main/AdvantagesSection/AdvantagesSection";
import FormalisationSection from "../../components/componentsOfPages/user/Main/FormalisationSection/FormalisationSection";
import Footer from "../../components/componentsOfPages/user/Footer/Footer";

const Landing: FC = () => {
    return (
        <>
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