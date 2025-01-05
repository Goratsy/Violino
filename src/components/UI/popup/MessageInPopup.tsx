import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface Props {
    isErrorPopup: boolean,
    children: ReactNode,
    id: number,
    handleClose: (id: number) => void,
}

const MessageInPopup: FC<Props> = ({ isErrorPopup, handleClose, children, id }) => {
    const closePopupInTime = useRef<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const hideMessage = () => {
        setIsVisible(false);

        closePopupInTime.current = window.setTimeout(() => {
            handleClose(id);
        }, 500);
    };

    useEffect(() => {
        setIsVisible(true);

        closePopupInTime.current = window.setTimeout(() => {
            hideMessage();
        }, 3000);

        return () => {
            if (closePopupInTime.current) {
                clearTimeout(closePopupInTime.current);
            }
        };
    }, [handleClose]);

    // useEffect(() => {

    // });

    return (
        <>
            {/* <div className={`fixed top-4 right-0 px-4 w-[400px] TS:w-[70%] P:w-[80%] flex flex-col justify-center items-center z-50 transition-opacity ease-in-out duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}> */}
            <div className={`w-full transition-opacity ease-in-out duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <div className={`bg-white p-6 shadow-md relative w-full border ${isErrorPopup ? 'border-red-300' : 'border-accent'} ease-in-out duration-500`}>
                    <div
                        onClick={hideMessage}
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
            {/* </div> */}
        </>
    );
};

export default MessageInPopup;