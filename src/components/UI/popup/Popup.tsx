import ReactDOM from "react-dom";
import { FC, useContext } from "react";
import MessageInPopup from "./MessageInPopup";
import { PopupContext } from "../../../App";

// interface Props {
//     isOpen: boolean,
//     isErrorPopup: boolean,
//     onClose: () => void,
//     children: ReactNode,
//     timeClose?: number,
// }

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
            {steckMessages && popupElement ?
                <>
                    {ReactDOM.createPortal(
                        <div className={`fixed top-0 right-0 p-4 p w-[400px] TS:w-[70%] P:w-[80%] h-[100%] overflow-y-auto flex flex-col justify-start items-center gap-4 z-50 transition ease-in-out duration-500`}>
                            {steckMessages.map((steckMessage, index) => {
                                console.log('updated');
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