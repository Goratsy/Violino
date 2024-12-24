import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    className?: string,
    fontWeight?: string,
}

const TextFooter: FC<Props> = ({children, className = 'text-left', fontWeight = 'font-normal'}) => {
    let textClass = classNames(
        'font-sans text-secondary',
        fontWeight,
        className,

        'text-text_footer_D',
        'TS:text-text_footer_TS',
        'P:text-text_footer_P',
    );    

    return(
        <>
            <span className={textClass}>{children}</span>
        </>
    );
}
export default TextFooter;