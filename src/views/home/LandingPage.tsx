'use client';

import { FC, useEffect, useState } from "react";

import { getPublicCatalog } from "@/shared/api/public";
import type { GroupedCatalog } from "@/shared/api/generated";
import Footer from "@/widgets/landing/footer/Footer";
import AboutSection from "@/widgets/landing/about-section/AboutSection";
import AdvantagesSection from "@/widgets/landing/advantages-section/AdvantagesSection";
import FormalisationSection from "@/widgets/landing/formalisation-section/FormalisationSection";
import Header from "@/widgets/landing/header/Header";
import HomeSection from "@/widgets/landing/home-section/HomeSection";

const Landing: FC = () => {
    const [catalog, setCatalog] = useState<GroupedCatalog | null>(null);
    const [isCatalogLoading, setIsCatalogLoading] = useState(true);
    const [catalogError, setCatalogError] = useState<string | null>(null);

    const loadCatalog = async () => {
        setIsCatalogLoading(true);
        setCatalogError(null);

        try {
            const data = await getPublicCatalog();
            setCatalog(data);
        } catch (error) {
            setCatalogError(error instanceof Error ? error.message : 'Не удалось загрузить каталог');
        } finally {
            setIsCatalogLoading(false);
        }
    };

    useEffect(() => {
        void loadCatalog();
    }, []);

    return (
        <>
            <Header />
            <main>
                <HomeSection />
                <AboutSection />
                <AdvantagesSection />
                <FormalisationSection />
            </main>
            <Footer
                catalog={catalog}
                isCatalogLoading={isCatalogLoading}
                catalogError={catalogError}
                onRetryCatalog={loadCatalog}
            />
        </>
    );
}

export default Landing;
