import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    className?: string,
    fontWeight?: string,
}

const Subtitle: FC<Props> = ({children, className = 'text-left', fontWeight = 'font-normal'}) => {
    let subtitleClass = classNames(
        'font-sans text-secondary',
        fontWeight,
        className,

        'text-subtitle_D',
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