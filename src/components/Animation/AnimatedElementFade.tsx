import { FC, ReactNode, useEffect, useRef, useState } from 'react';
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
        rootMargin: "10px 0px" 
    });
    
    const hasRun = useRef(false);
    const [hasAppeared, setHasAppeared] = useState(false);
  
    useEffect(() => {
      if (inView && !hasRun.current) {
        setHasAppeared(true);
        hasRun.current = true;
      }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={`${hasAppeared ? `${animateFade} opacity-100` : `opacity-0`} duration-500 transition-opacity animate-duration-500 animate-ease-in-out ${delay} ${additionalClasses}`}
        >
            {children}
        </div>
    );
};

export default AnimatedElementFade;
