import { FC } from "react";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H2 from "../../../../UI/text/H2";
import Subtitle from "../../../../UI/text/Subtitle";
import ButtonLink from "../../../../UI/button/ButtonLink";

const AboutSection: FC = () => {
    return (
        <>
            <section className="pt-[100px] TS:pt-[70px] pl-[12%] L:pl-20 relative flex flex-row gap-[75px] z-50">
                <div className="">
                    <img src="" alt="" className='' />
                    <div>
                        <HeadingOfSection>О нас</HeadingOfSection>
                        <H2 align="text-left T:hidden">История<br /> нашего пути</H2>
                        <H2 align="text-center hidden T:block">История нашего пути</H2>
                        <div>
                            <Subtitle>Начиная с 2014 года, наша кондитерская радует всех неравнодушных к сладкому, и оценивших наши десерты постоянных посетителей.</Subtitle>
                            <div className="w-[164px] mt-[30px] P:w-[120px]">
                                <ButtonLink>Заказать</ButtonLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="T:hidden">
                    <img src="" alt="" className='' />
                </div>
            </section>
        </>
    );
}

export default AboutSection;