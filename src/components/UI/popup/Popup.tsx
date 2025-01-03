import ReactDOM from "react-dom";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface Props {
    isOpen: boolean,
    isErrorPopup: boolean,
    onClose: () => void,
    children: ReactNode,
    timeClose: number,
}

const popupElement = document.getElementById("popup-root");

const Popup: FC<Props> = ({ isOpen, onClose, isErrorPopup = false, timeClose = 5000, children }) => {
    const closePopupInTime = useRef<number | null>(null);
    const [isVisible, setIsVisible] = useState(false); 

    const handleClose = () => {
        setIsVisible(false); 

        closePopupInTime.current = window.setTimeout(() => {
            onClose();
        }, 500);
    };

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true); 

            closePopupInTime.current = window.setTimeout(() => {
                handleClose();
            }, timeClose);
        } else {
            handleClose(); 
        }

        return () => {
            if (closePopupInTime.current) {
                clearTimeout(closePopupInTime.current);
            }
        };
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && popupElement ?
                <>
                    {ReactDOM.createPortal(
                        <div className={`fixed top-4 right-0 px-4 w-[400px] TS:w-[70%] P:w-full flex justify-center items-center z-50 transition-opacity ease-in-out duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                            <div className={`bg-white p-6 shadow-lg relative max-w-[500px] w-full border ${isErrorPopup ? 'border-red-300' : 'border-accent'}`}>
                                <div
                                    onClick={handleClose}
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
                        </div>,
                        popupElement
                    )}
                </>
                : ''}
        </>
    );
};

export default Popup;