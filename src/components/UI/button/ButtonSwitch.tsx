import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    rotateArrow?: string,
    accent?: boolean,
}

const ButtonSwitch: FC<Props> = ({ rotateArrow, accent = false, ...attributes }) => {
    let linkClass = classNames(
        'flex items-center justify-center',
        'duration-500 ease-in-out transition-colors',
        `${accent ? 'bg-accent hover:bg-accentHover stroke-white fill-white' : 'bg-white hover:bg-[#fffcfa] stroke-accent fill-accent'}`,
        'w-[100px] h-[100px]',
        'TS:w-[50px] TS:h-[50px]',
    );

    return (
        <>
            <button type="button" {...attributes} className={linkClass}>
                <svg className={`${rotateArrow} w-[12px] h-[19px]`} viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 18L1 9.5L9.5 1L10.3333 1.83333L2.66667 9.5L10.3333 17.1667L9.5 18Z" />
                </svg>
            </button>
        </>
    );
}

export default ButtonSwitch;