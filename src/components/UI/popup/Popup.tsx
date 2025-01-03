import ReactDOM from "react-dom";
import { FC, ReactNode, useEffect, useRef } from "react";
import BodyOfPopup from "./BodyOfPopup";

interface Props {
    isOpen: boolean,
    onClose: () => void,
    timeClose: number,
    children: ReactNode,
}

const popupElement = document.getElementById("popup-root");

const Popup: FC<Props> = ({ isOpen, onClose, timeClose, children }) => {
    const closePopupInTime = useRef<number | null>(null);

    useEffect(() => {
        if (isOpen) {
            closePopupInTime.current = setTimeout(() => {
                onClose();
            }, timeClose);
        } else if (closePopupInTime.current) {
            clearTimeout(closePopupInTime.current);
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
                            <BodyOfPopup onClose={onClose}>{children}</BodyOfPopup>,
                            popupElement
                        )}
                </>
                : ''}
        </>
    );
};

export default Popup;