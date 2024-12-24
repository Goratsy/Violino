import { FC, useState } from "react";
import Subtitle from "../../../../UI/text/Subtitle";
import H2 from "../../../../UI/text/H2";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H4 from "../../../../UI/text/H4";
import cake_formalisation_1_JPG from '../../../../../assets/jpg/cake_formalisation_decor_1.jpg';
import cake_formalisation_decor_1_JPG from '../../../../../assets/jpg/cake_formalisation_decor_1.jpg';
import cake_formalisation_decor_2_JPG from '../../../../../assets/jpg/cake_formalisation_decor_2.jpg';
import cake_formalisation_decor_3_JPG from '../../../../../assets/jpg/cake_formalisation_decor_3.jpg';
import cake_formalisation_decor_4_JPG from '../../../../../assets/jpg/cake_formalisation_decor_4.jpg';
import AnimatedElementFade from "../../../../Animation/AnimatedElementFade";


const FormalisationSection: FC = () => {
    let [formalisation, setFormalisation] = useState<string>('filling');

    const switchFormalisation = (e: any): void => {
        const id: string = e.currentTarget.getAttribute('data-id');
        setFormalisation(id);
    }

    return (
        <>
            <section id="formalisation" className="mt-[130px] T:mt-[100px] TS:mt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                <div>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[100ms]">
                        <HeadingOfSection className="text-center">О нас</HeadingOfSection>
                    </AnimatedElementFade>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[200ms]">
                        <H2 className="text-center mt-[8px] mb-[16px]">На любой вкус</H2>
                    </AnimatedElementFade>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[300ms]" additionalClasses="w-2/3 TS:w-full mx-auto">
                        <Subtitle className="text-center">Начиная с 2014 года, наша кондитерская радует всех неравнодушных к сладкому, и оценивших наши десерты постоянных посетителей.</Subtitle>
                    </AnimatedElementFade>
                </div>
                <div className="mt-[40px] TS:mt-[30px]">
                    <div className="flex flex-row flex-wrap justify-center items-center gap-[40px] L:gap-[30px] TS:gap-[20px]  P:gap-[15px]">
                        <span className="flex flex-row flex-nowrap justify-center items-center gap-[40px] L:gap-[30px] TS:gap-[20px] P:gap-[15px]">
                            <AnimatedElementFade animateFade="animate-fade-down" delay='animate-delay-[100ms]'>
                                <span className="relative cursor-pointer hover:opacity-70 duration-500 transition-opacity ease-in-out" onClick={switchFormalisation} data-id="filling">
                                    <span className={`absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'filling' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                                    <H4>Начинки</H4>
                                </span>
                            </AnimatedElementFade>
                            <AnimatedElementFade animateFade="animate-fade-down" delay='animate-delay-[200ms]'>
                                <span className="relative cursor-pointer hover:opacity-70 duration-500 transition-opacity ease-in-out" onClick={switchFormalisation} data-id="decor">
                                    <span className={`absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'decor' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                                    <H4>Декор</H4>
                                </span>
                            </AnimatedElementFade>
                        </span>
                        <span className="flex flex-row justify-center items-center gap-[40px] L:gap-[30px] TS:gap-[20px] P:gap-[15px]">
                            <AnimatedElementFade animateFade="animate-fade-down" delay='animate-delay-[300ms]'>
                                <span className="relative cursor-pointer hover:opacity-70 duration-500 transition-opacity ease-in-out" onClick={switchFormalisation} data-id="stylisation">
                                    <span className={`absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'stylisation' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                                    <H4>Стилизация</H4>
                                </span>
                            </AnimatedElementFade>
                            <AnimatedElementFade animateFade="animate-fade-down" delay='animate-delay-[400ms]'>
                                <span className="relative cursor-pointer hover:opacity-70 duration-500 transition-opacity ease-in-out" onClick={switchFormalisation} data-id="deserts">
                                    <span className={`absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'deserts' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                                    <H4>Десерты</H4>
                                </span>
                            </AnimatedElementFade>
                        </span>
                    </div>
                    <div className="grid grid-rows-1 grid-cols-4 TS:grid-rows-2 TS:grid-cols-2 P:grid-rows-4 P:grid-cols-1 mt-[30px] gap-[10px] TS:gap-y-2 TS:gap-x-2 P:mt-[20px]">
                        {'filling' === formalisation ?
                            <>
                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[100ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_1" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[200ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_2" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[300ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_3" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[400ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_4" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>
                            </>
                            : ''
                        }
                        {'decor' === formalisation ?
                            <>
                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[100ms]' threshold={0.3}>
                                    <img src={cake_formalisation_decor_1_JPG} alt="cake_formalisation_decor_1_JPG" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[200ms]' threshold={0.3}>
                                    <img src={cake_formalisation_decor_2_JPG} alt="cake_formalisation_decor_2_JPG" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[300ms]' threshold={0.3}>
                                    <img src={cake_formalisation_decor_3_JPG} alt="cake_formalisation_decor_3_JPG" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[400ms]' threshold={0.3}>
                                    <img src={cake_formalisation_decor_4_JPG} alt="cake_formalisation_decor_4_JPG" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>
                            </>
                            : ''
                        }
                        {'stylisation' === formalisation ?
                            <>
                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[100ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_1" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[200ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_2" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[300ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_3" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[400ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_4" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>
                            </>
                            : ''
                        }
                        {'deserts' === formalisation ?
                            <>
                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[100ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_1" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[200ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_2" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[300ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_3" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[400ms]' threshold={0.3}>
                                    <img src={cake_formalisation_1_JPG} alt="cake_formalisation_4" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>
                            </>
                            : ''
                        }

                    </div>
                </div>
            </section>
        </>
    );
}

export default FormalisationSection;