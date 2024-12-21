import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    align?: string,
    fontWeight?: string,
}

const Subtitle: FC<Props> = ({children, align = 'text-left', fontWeight = 'font-normal'}) => {
    let subtitleClass = classNames(
        'font-sans text-secondary',
        fontWeight,
        align,
        // 'D:text-subtitle_D',
        // 'L:text-subtitle_D',
        'T:text-subtitle_D',
        'TS:text-subtitle_TS',
        'P:text-subtitle_P',
    );    

    return(
        <>
            <p className={subtitleClass}>{children}</p>
        </>
    );
}
export default Subtitle;