import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    align?: string,
}

const H4: FC<Props> = ({children, align = 'text-left'}) => {
    let headingClass = classNames(
        'font-sans text-primary font-semibold',
        align,
        // 'D:text-h4_D',
        // 'L:text-h4_D',
        'text-h4_D',
        'TS:text-h4_TS',
        'P:text-h4_P',
    );    

    return(
        <>
            <h4 className={headingClass}>{children}</h4>
        </>
    );
}
export default H4;