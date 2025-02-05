import { FC } from "react";
import telegram_SVG from '../../../assets/svg/telegram.svg';
import whatsapp_SVG from '../../../assets/svg/whatsapp.svg';
import phone_SVG from '../../../assets/svg/phone.svg';


const NetworkLinks: FC<{styleDisplay?: string}> = ({styleDisplay}) => {
    let copyBufferPhone = async (event: any) => {
        event.preventDefault();
        const textToCopy = "89166904531";
        try {
            await navigator.clipboard.writeText(textToCopy);
            alert("Номер телефона успешно скопирован!");
        } catch (error) {
            alert("Ошибка при копировании номера телефона. Воспользуйтесь другими средствами связи!");
            console.error(error);
        }
    }

    return(
        <div className={`${styleDisplay}`}>
            <a href="https://t.me/viotort" target="_blank" className="inline-flex justify-center items-center w-[46px] h-[46px] bg-[#F7F7F7] rounded-full duration-500 ease-in-out transition-opacity hover:opacity-70">
                <img src={telegram_SVG} alt="telegram_SVG"/>
            </a>
            <a href="https://wa.me/79153312431" target="_blank" className="inline-flex mx-[16px] justify-center items-center w-[46px] h-[46px] bg-[#F7F7F7] rounded-full duration-500 ease-in-out transition-opacity hover:opacity-70">
                <img src={whatsapp_SVG} alt="whatsapp_SVG"/>
            </a>
            <a href="/" onClick={copyBufferPhone} className="inline-flex justify-center items-center w-[46px] h-[46px] bg-[#F7F7F7] rounded-full duration-500 ease-in-out transition-opacity hover:opacity-70">
                <img src={phone_SVG} alt="phone_SVG"/>
            </a>
        </div>
    );
}

export default NetworkLinks;