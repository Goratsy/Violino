import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    additionalClass?: string,
}

const Input: FC<Props> = ({additionalClass, ...attributes}) => {
    let linkClass = classNames(
        'w-full',
        'bg-white border border-accent hover:border-accentHover hover:bg-[#fffcfa]',
        'text-secondary font-normal',
        'duration-500 ease-in-out transition-colors',
        'placeholder:text-secondary',

         // 'D:text-[16px]',
         //'L:text-[16px]',
         'text-[16px] py-[20px] px-[20px]',
         'TS:text-[14px] TS:py-[16px] TS:px-[15px]',
         'P:text-[16px] P:py-[20px] P:px-[20px]',
         additionalClass,
    );

    return(
        <>
            <input {...attributes} className={linkClass} />
        </>
    );
}

export default Input;