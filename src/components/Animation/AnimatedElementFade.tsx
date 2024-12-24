import { FC, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    children: ReactNode,
    threshold?: number,
    animateFade: string,
    additionallyClasses?: string,
    triggerOnce?: boolean
}

const AnimatedElementFade: FC<Props> = ({ children, threshold = 0.1, triggerOnce = true, animateFade, additionallyClasses }) => {
    const { ref, inView } = useInView({
        triggerOnce, // При true: Анимация срабатывает только при первом просмотре
        threshold   // Срабатывает, когда какая-то часть элемента видима
    });

    return (
        <div
            ref={ref}
            className={`${inView ? `${animateFade} opacity-100` : `opacity-0`} duration-500 transition-opacity animate-duration-500 animate-ease-in-out ${additionallyClasses}`}
            
        >
            {children}
        </div>
    );
};

export default AnimatedElementFade;
