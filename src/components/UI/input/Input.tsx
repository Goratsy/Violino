import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";

const ButtonSubmit: FC<InputHTMLAttributes<HTMLInputElement>> = ({...attributes}) => {
    let linkClass = classNames(
        'w-full',
        'bg-white border border-accent hover:border-accentHover hover:bg-[#fffcfa]',
        'text-secondary font-normal',
        'duration-500 ease-in-out transition-colors',
        'placeholder:text-secondary',

         // 'D:text-[16px]',
         //'L:text-[16px]',
         'T:text-[16px] T:py-[20px] T:px-[20px]',
         'TS:text-[14px] TS:py-[16px] TS:px-[15px]',
         'P:text-[16px] P:py-[20px] P:px-[20px]',
    );

    return(
        <>
            <input {...attributes} className={linkClass} />
        </>
    );
}

export default ButtonSubmit;