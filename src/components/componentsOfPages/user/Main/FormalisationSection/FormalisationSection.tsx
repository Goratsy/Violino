import { FC, useState } from "react";
import Subtitle from "../../../../UI/text/Subtitle";
import H2 from "../../../../UI/text/H2";
import HeadingOfSection from "../../../../UI/text/HeadingOfSection";
import H3 from "../../../../UI/text/H3";
import cake_formalisation_decor_1_JPG from '../../../../../assets/webp/formalisationSection/decor/photo_decor_1.webp';
import cake_formalisation_decor_2_JPG from '../../../../../assets/webp/formalisationSection/decor/photo_decor_2.webp';
import cake_formalisation_decor_3_JPG from '../../../../../assets/webp/formalisationSection/decor/photo_decor_3.webp';
import cake_formalisation_decor_4_JPG from '../../../../../assets/webp/formalisationSection/decor/photo_decor_4.webp';

import cake_formalisation_desert_1_JPG from '../../../../../assets/webp/formalisationSection/deserts/photo_desert_1.webp';
import cake_formalisation_desert_2_JPG from '../../../../../assets/webp/formalisationSection/deserts/photo_desert_2.webp';
import cake_formalisation_desert_3_JPG from '../../../../../assets/webp/formalisationSection/deserts/photo_desert_3.webp';
import cake_formalisation_desert_4_JPG from '../../../../../assets/webp/formalisationSection/deserts/photo_desert_4.webp';

import cake_formalisation_form_1_JPG from '../../../../../assets/webp/formalisationSection/formation/photo_form_1.webp';
import cake_formalisation_form_2_JPG from '../../../../../assets/webp/formalisationSection/formation/photo_form_2.webp';
import cake_formalisation_form_3_JPG from '../../../../../assets/webp/formalisationSection/formation/photo_form_3.webp';
import cake_formalisation_form_4_JPG from '../../../../../assets/webp/formalisationSection/formation/photo_form_4.webp';

import cake_formalisation_filling_1_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_1.webp';
import cake_formalisation_filling_2_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_2.webp';
import cake_formalisation_filling_3_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_3.webp';
import cake_formalisation_filling_4_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_4.webp';
import cake_formalisation_filling_5_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_5.webp';
import cake_formalisation_filling_6_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_6.webp';
import cake_formalisation_filling_7_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_7.webp';
import cake_formalisation_filling_8_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_8.webp';
import cake_formalisation_filling_9_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_9.webp';
import cake_formalisation_filling_10_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_10.webp';
import cake_formalisation_filling_11_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_11.webp';
import cake_formalisation_filling_12_WEBP from '../../../../../assets/webp/formalisationSection/filling/filling_12.webp';

import AnimatedElementFade from "../../../../Animation/AnimatedElementFade";
import TextMain from "../../../../UI/text/TextMain";


const FormalisationSection: FC = () => {
    let [formalisation, setFormalisation] = useState<string>('filling');
    let [subtitle_text, setSubtitle_text] = useState<string>('Разнообразие вкусовых сочетаний, созданных для вашего удовольствия, от классических до самых изысканных');

    const imagesFilling = [[{ image: cake_formalisation_filling_1_WEBP, text: 'Фисташка с малиной' }, { image: cake_formalisation_filling_2_WEBP, text: 'Кокосовая' }, { image: cake_formalisation_filling_3_WEBP, text: 'Эстерхайзи' }],
    [{ image: cake_formalisation_filling_4_WEBP, text: 'Медовик' }, { image: cake_formalisation_filling_5_WEBP, text: 'Муссовая' }, { image: cake_formalisation_filling_6_WEBP, text: 'Красный бархат' }],
    [{ image: cake_formalisation_filling_7_WEBP, text: 'Фундук с грушей' }, { image: cake_formalisation_filling_8_WEBP, text: 'Сникерс' }, { image: cake_formalisation_filling_9_WEBP, text: 'Морковная' }],
    [{ image: cake_formalisation_filling_10_WEBP, text: 'Морковная с черносливом' }, { image: cake_formalisation_filling_11_WEBP, text: 'Три шоколада' }, { image: cake_formalisation_filling_12_WEBP, text: 'Шоколадная' }]];
    const imagesFilling_animateDelay = ['animate-delay-[100ms]', 'animate-delay-[200ms]', 'animate-delay-[300ms]', 'animate-delay-[400ms]']

    const switchFormalisation = (formalisation: string): void => {
        setFormalisation(formalisation);

        switch (formalisation) {
            case 'filling':
                setSubtitle_text('Разнообразие вкусовых сочетаний, созданных для вашего удовольствия, от классических до самых изысканных');
                break;
            case 'decor':
                setSubtitle_text('Элегантные украшения из ягод, карамели, макарони и узоров, превращающие торт в произведение искусства');
                break;
            case 'stylisation':
                setSubtitle_text('Уникальный дизайн по вашему эскизу, сложные формы, ярусные конструкции — воплощаем любые идеи');
                break;
            case 'deserts':
                setSubtitle_text('Аппетитные капкейки, нежные макарони, воздушные профитроли и кремовые чизкейки для особых моментов');
                break;
        }
    }

    return (
        <>
            <section id="formalisation" className="pt-[130px] T:pt-[100px] TS:pt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                <div>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[100ms]">
                        <HeadingOfSection className="text-center">Оформление</HeadingOfSection>
                    </AnimatedElementFade>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[200ms]">
                        <H2 className="text-center mt-[8px] mb-[16px]">На любой вкус</H2>
                    </AnimatedElementFade>
                    <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[300ms]" additionalClasses="w-2/3 TS:w-full mx-auto">
                        <Subtitle className="text-center">{subtitle_text}</Subtitle>
                    </AnimatedElementFade>
                </div>
                <div className="mt-[40px] TS:mt-[30px]">
                    <div className="flex flex-row flex-wrap justify-center items-center gap-[40px] L:gap-[30px] TS:gap-[20px]  P:gap-[15px]">
                        <span className="flex flex-row flex-nowrap justify-center items-center gap-[40px] L:gap-[30px] TS:gap-[20px] P:gap-[15px]">
                            <AnimatedElementFade animateFade="animate-fade-down" delay='animate-delay-[100ms]'>
                                <span className="relative cursor-pointer hover:opacity-70 duration-500 transition-opacity ease-in-out" onClick={() => { switchFormalisation('filling') }}>
                                    <span className={`block z-30 absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'filling' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                                    <H3>Начинки</H3>
                                </span>
                            </AnimatedElementFade>
                            <AnimatedElementFade animateFade="animate-fade-down" delay='animate-delay-[200ms]'>
                                <span className="relative cursor-pointer hover:opacity-70 duration-500 transition-opacity ease-in-out" onClick={() => { switchFormalisation('decor') }}>
                                    <span className={`block z-30 absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'decor' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                                    <H3>Декор</H3>
                                </span>
                            </AnimatedElementFade>
                        </span>
                        <span className="flex flex-row justify-center items-center gap-[40px] L:gap-[30px] TS:gap-[20px] P:gap-[15px]">
                            <AnimatedElementFade animateFade="animate-fade-down" delay='animate-delay-[300ms]'>
                                <span className="relative cursor-pointer hover:opacity-70 duration-500 transition-opacity ease-in-out" onClick={() => { switchFormalisation('stylisation') }}>
                                    <span className={`block z-30 absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'stylisation' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                                    <H3>Стилизация</H3>
                                </span>
                            </AnimatedElementFade>
                            <AnimatedElementFade animateFade="animate-fade-down" delay='animate-delay-[400ms]'>
                                <span className="relative cursor-pointer hover:opacity-70 duration-500 transition-opacity ease-in-out" onClick={() => { switchFormalisation('deserts') }}>
                                    <span className={`block z-30 absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'deserts' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                                    <H3>Десерты</H3>
                                </span>
                            </AnimatedElementFade>
                        </span>
                    </div>
                    <div className="grid grid-rows-1 grid-cols-4 TS:grid-rows-2 TS:grid-cols-2 P:grid-rows-4 P:grid-cols-1 justify-between mt-[30px] gap-[10px] TS:gap-y-2 TS:gap-x-2 P:mt-[20px]">
                        {'filling' === formalisation ?
                            <>
                                {imagesFilling.map((imageGroups, indexGr) => {
                                    return (
                                        <div className="" key={'filling_group' + indexGr.toString()}>
                                            <AnimatedElementFade animateFade="animate-fade" additionalClasses="flex flex-col gap-6 TS:gap-2" delay={imagesFilling_animateDelay[indexGr]}>
                                                {imageGroups.map((imageGroup, index) => {
                                                    return (
                                                        <div className="flex gap-4 items-center" key={'filling_group' + indexGr.toString() + 'filling' + index.toString()}>
                                                            <img src={imageGroup.image} alt="filling_1_image" className="w-16 h-auto rounded-full" />
                                                            <TextMain className="font-medium">{imageGroup.text}</TextMain>
                                                        </div>
                                                    );
                                                })}

                                            </AnimatedElementFade>
                                        </div>
                                    );
                                })}
                            </>
                            : ''
                        }
                        {'decor' === formalisation ?
                            <>
                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[100ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Карамель без сахара ручной работы и мраморный рисунок
                                    </span>
                                    <img src={cake_formalisation_decor_2_JPG} alt="cake_formalisation_decor_1_JPG" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[200ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Фигуры ручной работы из бельгийского шоколада, листовая поталь и макарони
                                    </span>
                                    <img src={cake_formalisation_decor_1_JPG} alt="cake_formalisation_decor_2_JPG" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[300ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Фигуры ручной работы из бельгийского шоколада и ваза из карамели
                                    </span>
                                    <img src={cake_formalisation_decor_3_JPG} alt="cake_formalisation_decor_3_JPG" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[400ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Покрытие кондитерским бархатом и «осколки» из карамели
                                    </span>
                                    <img src={cake_formalisation_decor_4_JPG} alt="cake_formalisation_decor_4_JPG" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>
                            </>
                            : ''
                        }
                        {'stylisation' === formalisation ?
                            <>
                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[100ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Сложна форма машины / сумки / здания / еда
                                    </span>
                                    <img src={cake_formalisation_form_1_JPG} alt="cake_formalisation_1" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[200ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Торт в виде цифры
                                    </span>
                                    <img src={cake_formalisation_form_2_JPG} alt="cake_formalisation_2" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[300ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Эскиз / Рисунок клиента или фото торта
                                    </span>
                                    <img src={cake_formalisation_form_3_JPG} alt="cake_formalisation_3" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[400ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Торт с несколькими ярусами
                                    </span>
                                    <img src={cake_formalisation_form_4_JPG} alt="cake_formalisation_4" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>
                            </>
                            : ''
                        }
                        {'deserts' === formalisation ?
                            <>
                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[100ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Пирожное Шу
                                    </span>
                                    <img src={cake_formalisation_desert_1_JPG} alt="cake_formalisation_1" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[200ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Макарони
                                    </span>
                                    <img src={cake_formalisation_desert_2_JPG} alt="cake_formalisation_2" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[300ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Чизкейк, Павлова, Тарты
                                    </span>
                                    <img src={cake_formalisation_desert_3_JPG} alt="cake_formalisation_3" loading="lazy" className="w-full h-auto" />
                                </AnimatedElementFade>

                                <AnimatedElementFade animateFade="animate-fade" delay='animate-delay-[400ms]' threshold={0.3} additionalClasses="relative">
                                    <span className="absolute flex justify-center items-center text-center px-4 font-medium bg-black/50 text-white w-full h-full opacity-0 hover:opacity-100 active:opacity-100 duration-500 transition-opacity animate-duration-500 animate-ease-in-out">
                                        Брауни
                                    </span>
                                    <img src={cake_formalisation_desert_4_JPG} alt="cake_formalisation_4" loading="lazy" className="w-full h-auto" />
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