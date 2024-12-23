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
            <div className="absolute w-full h-[100vh] z-0 T:h-[50vh] LS:min-h-[700px]">
                <div className="absolute w-full h-full overflow-hidden">
                    <img src={home_bg_PNG} alt="" className="absolute w-[40%] L:w-[50%] T:w-[58%] h-auto right-0 top-0 -translate-y-44 translate-x-36 TS:hidden" />
                </div>
                <img src={home_bg_PNG} alt="" className="absolute w-[40%] L:w-[50%] T:w-[58%] h-auto bottom-0 -left-[15rem] translate-y-44 TS:hidden" />
            </div>
            <section className="pl-[12%] h-[100vh] LS:min-h-[700px] pt-[110px] relative flex flex-row items-center gap-[75px]  L:pl-0 z-10 T:h-[50vh]">
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
                <div className="block L:hidden w-[60%] h-full">
                    <Carousel></Carousel>
                </div>
            </section>

        </>
    );
}

export default HomeSection;