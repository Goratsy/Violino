import { FC } from "react";
import Header from "../../components/componentsOfPages/user/Header/Header";
import HomeSection from "../../components/componentsOfPages/user/Main/HomeSection/HomeSection";

const Landing: FC = () => {
    return (
        <>
            <Header />
            <main className="pt-[100px]">
                <HomeSection/>
            </main>

        </>
    );
}

export default Landing;