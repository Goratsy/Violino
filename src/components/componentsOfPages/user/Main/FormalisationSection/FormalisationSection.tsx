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


const FormalisationSection: FC = () => {
    let [formalisation, setFormalisation] = useState<string>('filling');

    const switchFormalisation = (e: any): void => {
        const id: string = e.currentTarget.getAttribute('data-id');
        setFormalisation(id);
    }

    return (
        <>
            <section id="formalisation" className="mt-[130px] T:mt-[100px] TS:mt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
                <div className="">
                    <HeadingOfSection className="text-center">О нас</HeadingOfSection>
                    <H2 className="text-center mt-[8px] mb-[16px]">На любой вкус</H2>
                    <div className="w-2/3 TS:w-full mx-auto">
                        <Subtitle className="text-center">Начиная с 2014 года, наша кондитерская радует всех неравнодушных к сладкому, и оценивших наши десерты постоянных посетителей.</Subtitle>
                    </div>
                </div>
                <div className="mt-[50px]">
                    <div className="flex justify-center items-center gap-[40px] L:gap-[30px] TS:gap-[20px]">
                        <span className="relative cursor-pointer" onClick={switchFormalisation} data-id="filling">
                            <span className={`absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'filling' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            <H4>Начинки</H4>
                        </span>
                        <span className="relative cursor-pointer" onClick={switchFormalisation} data-id="decor">
                            <span className={`absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'decor' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            <H4>Декор</H4>
                        </span>
                        <span className="relative cursor-pointer" onClick={switchFormalisation} data-id="stylisation">
                            <span className={`absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'stylisation' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            <H4>Стилизация</H4>
                        </span>
                        <span className="relative cursor-pointer" onClick={switchFormalisation} data-id="deserts">
                            <span className={`absolute top-[53%] h-[2.5px] w-full bg-accent duration-500 transition-transform origin-left ease-out ${'deserts' === formalisation ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            <H4>Десерты</H4>
                        </span>
                    </div>
                    <div className="grid grid-rows-1 grid-cols-4 TS:grid-rows-2 TS:grid-cols-2 mt-[30px]">
                        {'filling' === formalisation ?
                            <>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_1" loading="lazy"/>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_2" loading="lazy"/>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_3" loading="lazy"/>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_4" loading="lazy"/>
                            </>
                            : ''
                        }
                        {'decor' === formalisation ?
                            <>
                                <img src={cake_formalisation_decor_1_JPG} alt="cake_formalisation_decor_1_JPG" loading="lazy"/>
                                <img src={cake_formalisation_decor_2_JPG} alt="cake_formalisation_decor_2_JPG" loading="lazy"/>
                                <img src={cake_formalisation_decor_3_JPG} alt="cake_formalisation_decor_3_JPG" loading="lazy"/>
                                <img src={cake_formalisation_decor_4_JPG} alt="cake_formalisation_decor_4_JPG" loading="lazy"/>
                            </>
                            : ''
                        }
                        {'stylisation' === formalisation ?
                            <>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_1" loading="lazy"/>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_2" loading="lazy"/>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_3" loading="lazy"/>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_4" loading="lazy"/>
                            </>
                            : ''
                        }
                        {'deserts' === formalisation ?
                            <>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_1" loading="lazy"/>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_2" loading="lazy"/>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_3" loading="lazy"/>
                                <img src={cake_formalisation_1_JPG} alt="cake_formalisation_4" loading="lazy"/>
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