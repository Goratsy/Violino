import { FC, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    children: ReactNode,
    threshold?: number,
    animateFade: string,
    additionalClasses?: string,
    triggerOnce?: boolean,
    delay?: string
}

const AnimatedElementFade: FC<Props> = ({ children, threshold = 0.5, triggerOnce = true, delay, animateFade, additionalClasses }) => {
    const { ref, inView } = useInView({
        triggerOnce,
        threshold,
    });

    return (
        <div
            ref={ref}
            className={`${inView ? `${animateFade} opacity-100` : `opacity-0`} duration-500 transition-opacity animate-duration-500 animate-ease-in-out ${delay} ${additionalClasses}`}
        >
            {children}
        </div>
    );
};

export default AnimatedElementFade;
