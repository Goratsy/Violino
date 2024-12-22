import classNames from "classnames";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode,
}

const ButtonLink: FC<Props> = ({children, ...attributes}) => {
    let linkClass = classNames(
        'bg-accent hover:bg-accentHover',
        'text-white font-semibold',
        'flex items-center justify-center',
        'duration-500 ease-in-out transition-colors',

         // 'D:text-[16px]',
         //'L:text-[16px]',
         'text-[16px] py-[20px] px-[44px]',
         'TS:text-h[14px] TS:py-[16px] TS:px-[35px]',
         'P:text-[16px] P:py-[20px] P:px-[44px]',
         
    );

    return(
        <>
            <a className={linkClass} {...attributes}>
                {children}
            </a>
        </>
    );
}

export default ButtonLink;