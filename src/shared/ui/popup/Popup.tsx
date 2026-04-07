import ReactDOM from "react-dom";
import { FC, useEffect, useState } from "react";
import MessageInPopup from "./MessageInPopup";
import { usePopup } from "@/shared/lib/contexts/popup-context";

const Popup: FC = () => {
    const { steckMessages, setSteckMessages } = usePopup();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleClose = (id: number) => {
        setSteckMessages(() => (steckMessages || []).filter((_, index) => index !== id));
    };

    return (
        <>
            {(steckMessages || []).length > 0 && isMounted ?
                <>
                    {ReactDOM.createPortal(
                        <div className={`fixed top-0 right-0 p-4 p w-[400px] TS:w-[70%] P:w-[80%] max-h-[100%] overflow-y-auto flex flex-col justify-start gap-4 z-50`}>
                            {(steckMessages || []).map((steckMessage, index) => {
                                return <MessageInPopup id={index} isErrorPopup={steckMessage.isErrorPopup} handleClose={handleClose} key={`Message_${index}`}>{steckMessage.message}</MessageInPopup>;
                            })}
                        </div>,
                        document.body
                    )}
                </>
                : ''}
        </>
    );
};

export default Popup;
