import { FC } from "react";
import Carousel from "../../../../UI/carousel/Carousel";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H1 from "../../../../UI/text/H1";
import Subtitle from "../../../../UI/text/Subtitle";
import ButtonLink from "../../../../UI/button/ButtonLink";

const HomeSection: FC = () => {
    return (
        <>
            <section>
                <div>
                    <HeadingOfSection>Главная</HeadingOfSection>
                    <H1>Торты на заказ</H1>
                    <div>
                        <Subtitle>Виолино воплощает ваши сладкие мечты в реальность, создавая уникальные и вкусные торты</Subtitle>
                        <ButtonLink>Заказать</ButtonLink>
                    </div>
                </div>
                <div>
                    <Carousel></Carousel>
                </div>
            </section>

        </>
    );
}

export default HomeSection;