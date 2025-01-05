import ReactDOM from "react-dom";
import { FC, useContext } from "react";
import MessageInPopup from "./MessageInPopup";
import { PopupContext } from "../../../App";

const popupElement = document.getElementById("popup-root");

const Popup: FC = () => {
    const { steckMessages, setSteckMessages } = useContext(PopupContext);

    const handleClose = (id: number) => {
        if (steckMessages) {
            setSteckMessages(() => steckMessages.filter((_, index) => index !== id));
        }
    };

    return (
        <>
            {(steckMessages || []).length > 0 && popupElement ?
                <>
                    {ReactDOM.createPortal(
                        <div className={`fixed top-0 right-0 p-4 p w-[400px] TS:w-[70%] P:w-[80%] max-h-[100%] overflow-y-auto flex flex-col justify-start gap-4 z-50`}>
                            {(steckMessages || []).map((steckMessage, index) => {
                                return <MessageInPopup id={index} isErrorPopup={steckMessage.isErrorPopup} handleClose={handleClose} key={`Message_${index}`}>{steckMessage.message}</MessageInPopup>;
                            })}
                        </div>,
                        popupElement
                    )}
                </>
                : ''}
        </>
    );
};

export default Popup;