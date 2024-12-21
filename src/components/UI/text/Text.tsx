import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    align?: string,
    fontWeight?: string,
}

const Text: FC<Props> = ({children, align = 'text-left', fontWeight = 'font-normal'}) => {
    let textClass = classNames(
        'font-sans text-secondary',
        fontWeight,
        align,
        // 'D:text-text_D',
        // 'L:text-text_D',
        'T:text-text_D',
        'TS:text-text_TS',
        'P:text-text_P',
    );    

    return(
        <>
            <span className={textClass}>{children}</span>
        </>
    );
}
export default Text;