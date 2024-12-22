import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    align?: string

}

const H2: FC<Props> = ({children, align = 'text-left'}) => {
    let headingClass = classNames(
        'font-sans text-primary font-semibold',
        align,
        // 'D:text-h2_D',
        'text-h2_D',
        'T:text-h2_T',
        'TS:text-h2_TS',
        'P:text-h2_P',
    );    

    return(
        <>
            <h2 className={headingClass}>{children}</h2>
        </>
    );
}
export default H2;