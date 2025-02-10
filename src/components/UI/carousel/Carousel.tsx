import useEmblaCarousel from "embla-carousel-react";
import { FC, useCallback } from "react";
import ButtonSwitch from "../button/ButtonSwitch";
import Autoplay from "embla-carousel-autoplay";
import './Carousel.css';
import Cake_main_1 from '../../../assets/webp/cake_home_section.webp';
import Cake_main_2 from '../../../assets/webp/cake_home_section_2.webp';
import Cake_main_3 from '../../../assets/webp/cake_home_section_3.webp';

const Carousel: FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 4000})])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <div className="relative h-full">
                <div className="embla h-full" ref={emblaRef}>
                    <div className="embla__container h-full">
                        <div className="relative embla__slide border h-full">
                            <img src={Cake_main_2} alt="cake1" className="h-auto w-full absolute -bottom-16 L:-bottom-24 P:bottom-0 TS:bottom-0"/>
                        </div>
                        <div className="relative embla__slide border h-full">
                            <img src={Cake_main_1} alt="cake2" className="h-auto w-full absolute bottom-0 L:-bottom-24 P:bottom-0 TS:bottom-0" loading="lazy"/>
                        </div>
                        <div className="relative embla__slide border h-full">
                            <img src={Cake_main_3} alt="cake3" className="h-auto w-full absolute -bottom-16 L:-bottom-24 P:bottom-0 TS:bottom-0" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 flex L:justify-between L:items-center L:w-full L:bottom-[calc(50%-50px)] TS:bottom-[calc(50%-25px)]">
                    <ButtonSwitch onClick={scrollPrev} name="to_left_button" title="to_left_button"></ButtonSwitch>
                    <ButtonSwitch onClick={scrollNext} rotateArrow="rotate-180" name="to_right_button" title="to_right_button"></ButtonSwitch>
                </div>
            </div>
        </>
    );
}

export default Carousel;