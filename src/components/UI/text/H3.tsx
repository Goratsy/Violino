import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    className?: string,
}

const H3: FC<Props> = ({children, className = 'text-left'}) => {
    let headingClass = classNames(
        'font-sans text-primary font-semibold',
        className,
        // 'D:text-h4_D',
        // 'L:text-h4_D',
        'text-h3_D',
        'TS:text-h3_TS',
        'P:text-h3_P',
    );    

    return(
        <>
            <h3 className={headingClass}>{children}</h3>
        </>
    );
}
export default H3;