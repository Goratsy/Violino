import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    align?: string,
    textWrap?: string
}

const H1: FC<Props> = ({children, align = 'text-left', textWrap}) => {
    let headingClass = classNames(
        'font-sans text-primary font-semibold',
        align,
        textWrap,

        'text-h1_D',
        'L:text-h1_L',
        'T:text-h1_T',
        'TS:text-h1_TS',
        'P:text-h1_P',
    );    

    return(
        <>
            <h1 className={headingClass}>{children}</h1>
        </>
    );
}
export default H1;