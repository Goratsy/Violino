import { FC } from "react";
import Header from "../../components/componentsOfPages/user/Header/Header";
import HomeSection from "../../components/componentsOfPages/user/Main/HomeSection/HomeSection";

const Landing: FC = () => {
    return (
        <>
            <Header />
            <main className="">
                <HomeSection/>
            </main>

        </>
    );
}

export default Landing;