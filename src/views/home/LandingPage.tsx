'use client';

import { FC } from "react";

import Footer from "@/widgets/landing/footer/Footer";
import AboutSection from "@/widgets/landing/about-section/AboutSection";
import AdvantagesSection from "@/widgets/landing/advantages-section/AdvantagesSection";
import FormalisationSection from "@/widgets/landing/formalisation-section/FormalisationSection";
import Header from "@/widgets/landing/header/Header";
import HomeSection from "@/widgets/landing/home-section/HomeSection";

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
