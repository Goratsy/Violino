import { FC } from "react";
import Carousel from "../../../../UI/carousel/Carousel";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H1 from "../../../../UI/text/H1";
import Subtitle from "../../../../UI/text/Subtitle";
import ButtonLink from "../../../../UI/button/ButtonLink";

const HomeSection: FC = () => {
    return (
        <>
            <section className="flex flex-row items-center gap-[75px] pl-[12%] h-[100vh] pt-[100px]">
                <div className="w-[40%]">
                    <HeadingOfSection align="text-left">Главная</HeadingOfSection>
                    <H1 align="text-left" textWrap="text-nowrap">Торты<br/> на заказ</H1>
                    <div className="pl-[40px] mt-[15px]">
                        <Subtitle align="text-left">Виолино воплощает ваши сладкие мечты в реальность, создавая уникальные и вкусные торты</Subtitle>
                        <div className="w-[164px] mt-[30px]">
                            <ButtonLink>Заказать</ButtonLink>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] h-full">
                    <Carousel></Carousel>
                </div>
            </section>

        </>
    );
}

export default HomeSection;