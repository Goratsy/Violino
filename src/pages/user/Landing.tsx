import { FC } from "react";
import Header from "../../components/componentsOfPages/user/Header/Header";
import ButtonLink from "../../components/UI/button/ButtonLink";
import ButtonSubmit from "../../components/UI/button/ButtonSubmit";
import Input from "../../components/UI/input/Input";
import Logo from "../../components/UI/logo/Logo";
import H1 from "../../components/UI/text/H1";
import H2 from "../../components/UI/text/H2";
import H4 from "../../components/UI/text/H4";
import HeadingOfSection from "../../components/UI/text/HeadingOfSection";
import Subtitle from "../../components/UI/text/Subtitle";
import TextFooter from "../../components/UI/text/TextFooter";
import TextMain from "../../components/UI/text/TextMain";
import Textarea from "../../components/UI/textarea/Textarea";
import NetworkLinks from "../../components/UI/networkLinks/NetworkLinks";

const Landing: FC = () => {
    return (
        <>
            <Header />
            <main className="overflow-hidden">
                <section className="pt-[200px]">
                    
                    <Input placeholder="alsdf;"></Input>
                    <Textarea placeholder="safdsadfi"></Textarea>
                    <Logo></Logo>
                    <H1>RWQsadffjl</H1>
                    <H2>SADFwqr</H2>
                    <H4>Fdafasdf</H4>
                    <HeadingOfSection>SADfasdfl</HeadingOfSection>
                    <Subtitle>safdqwer</Subtitle>
                    <TextMain>lqweriqwhugs</TextMain>
                    <TextFooter>slkadf;sd</TextFooter>
                    <NetworkLinks></NetworkLinks>
                    <ButtonLink>ldasf</ButtonLink>
                    <ButtonSubmit>sdfl;k</ButtonSubmit>
                </section>
            </main>

        </>
    );
}

export default Landing;