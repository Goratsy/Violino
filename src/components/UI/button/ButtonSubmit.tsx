import classNames from "classnames";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

const ButtonSubmit: FC<Props> = ({children, ...attributes}) => {
    let linkClass = classNames(
        'w-full',
        'bg-accent hover:bg-accentHover disabled:opacity-70',
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
            <button name="submit_button" type="button" {...attributes} className={linkClass}>
                {children}
            </button>
        </>
    );
}

export default ButtonSubmit;