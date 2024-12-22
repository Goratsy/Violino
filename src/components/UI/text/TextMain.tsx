import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    align?: string,
    fontWeight?: string,
}

const TextMain: FC<Props> = ({children, align = 'text-left', fontWeight = 'font-normal'}) => {
    let textClass = classNames(
        'font-sans text-secondary',
        fontWeight,
        align,

        'text-text_D',
        'TS:text-text_TS',
        'P:text-text_P',
    );    

    return(
        <>
            <span className={textClass}>{children}</span>
        </>
    );
}
export default TextMain;