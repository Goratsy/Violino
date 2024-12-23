import { FC } from "react";
import Carousel from "../../../../UI/carousel/Carousel";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H1 from "../../../../UI/text/H1";
import Subtitle from "../../../../UI/text/Subtitle";
import ButtonLink from "../../../../UI/button/ButtonLink";
import home_bg_PNG from "../../../../../assets/png/home_bg.png";

const HomeSection: FC = () => {
    return (
        <>
            <div className="absolute w-full h-[100vh] z-0 T:h-[50vh] LS:min-h-[700px] TS:hidden">
                <div className="absolute w-full h-full overflow-hidden">
                    <img src={home_bg_PNG} alt="" className="absolute w-[40%] L:w-[50%] T:w-[58%] h-auto right-0 top-0 -translate-y-44 translate-x-36" />
                </div>
                <img src={home_bg_PNG} alt="" className="absolute w-[40%] L:w-[50%] T:w-[58%] h-auto bottom-0 -left-[15rem] translate-y-44" />
            </div>
            <section className="h-[100vh] T:h-[60vh] LS:min-h-[700px] pt-[110px] L:pt-[150px] pl-[12%] L:pl-0 relative flex flex-row L:flex-col items-center gap-[75px] z-10 ">
                <div className="w-[40%] L:w-full">
                    <HeadingOfSection align="text-left mb-[4px] L:text-center">Главная</HeadingOfSection>
                    <H1 align="text-left L:hidden" textWrap="text-nowrap">Торты<br /> на заказ</H1>
                    <H1 align="text-center hidden L:block" textWrap="text-nowrap">Торты на заказ</H1>

                    <div className="pl-[40px] mt-[15px] L:p-0 L:flex L:items-center L:flex-col">
                        <div className="L:w-2/4 TS:w-[80%]">
                            <Subtitle align="text-left L:text-center">Виолино воплощает ваши сладкие мечты в реальность, создавая уникальные и вкусные торты</Subtitle>
                        </div>
                        <div className="w-[164px] mt-[30px] P:w-[120px]">
                            <ButtonLink>Заказать</ButtonLink>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] L:w-full h-full L:min-h-[700px] P:min-h-[400px] z-40">
                    <Carousel></Carousel>
                </div>
            </section>

        </>
    );
}

export default HomeSection;