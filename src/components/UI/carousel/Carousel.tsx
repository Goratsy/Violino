import useEmblaCarousel from "embla-carousel-react";
import { FC, useCallback } from "react";
import './Carousel.css';
import ButtonSwitch from "../button/ButtonSwitch";

const Carousel: FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

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
                        <div className="embla__slide border h-full">Slide 1</div>
                        <div className="embla__slide border h-full">Slide 2</div>
                        <div className="embla__slide border h-full">Slide 3</div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 flex">
                    <ButtonSwitch onClick={scrollPrev}></ButtonSwitch>
                    <ButtonSwitch onClick={scrollNext} rotateArrow="rotate-180"></ButtonSwitch>
                </div>
            </div>
        </>
    );
}

export default Carousel;