import { FC, ReactNode } from "react";
import classNames from 'classnames';

interface Props {
    children: ReactNode,
    className?: string,
}

const HeadingOfSection: FC<Props> = ({children, className = 'text-left'}) => {
    let headingOfSectionClass = classNames(
        'font-fancy text-primary tracking-[1px]',
        className,
        // 'D:text-text_D',
        // 'L:text-text_D',
        // 'T:text-heading_of_section_D',
        'text-heading_of_section_D',
        'P:text-heading_of_section_P',
    );    

    return(
        <>
            <p className={headingOfSectionClass}>{children}</p>
        </>
    );
}
export default HeadingOfSection;