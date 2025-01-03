import { FC, ReactNode } from "react";

interface Props {
    onClose: () => void,
    children: ReactNode,
}

const BodyOfPopup: FC<Props> = ({ onClose, children }) => {
    return (
        <>
            <div className={`fixed top-4 right-0 px-4 w-[400px] TS:w-[70%] P:w-full flex justify-center items-center z-50`}>
                <div className="bg-white p-6 shadow-lg relative max-w-[500px] w-full border border-accent">
                    <div
                        onClick={onClose}
                        className="block absolute top-2 right-2 cursor-pointer w-[18px] h-[20px] duration-500 ease-in-out transition-opacity hover:opacity-70"
                    >
                        <span
                            className={`absolute top-0 left-0 w-full h-[2px] bg-accent rounded-md rotate-45 translate-y-[9px]`}
                        ></span>
                        <span
                            className={`absolute bottom-0 right-0 w-full h-[2px] bg-accent rounded-md -rotate-45 translate-y-[-9px]`}
                        ></span>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default BodyOfPopup;