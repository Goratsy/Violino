import { FC, useEffect, useState } from "react";
import NetworkLinks from "../../../UI/networkLinks/NetworkLinks";
import Logo from "../../../UI/logo/Logo";

const Header: FC = () => {
    let [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(true);

    let openBurgerMenu = (): void => {
        setIsOpenBurgerMenu(!isOpenBurgerMenu);
    }

    let closeBurgerMenu = (): void => {
        setIsOpenBurgerMenu(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) { // Если ширина >= 1200px (desktop)
                setIsOpenBurgerMenu(false); // Закрыть меню
                document.body.style.overflow = ''; // Восстановить прокрутку
            }
        };

        if (isOpenBurgerMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ''; 
        }

        // Добавляем слушатель на изменение размеров окна
        window.addEventListener('resize', handleResize);

        // Очистка эффекта
        return () => {
            document.body.style.overflow = ''; // Восстанавливаем прокрутку при размонтировании
            window.removeEventListener('resize', handleResize); // Удаляем слушатель
        };
    }, [isOpenBurgerMenu]);

    return (
        <header className={`absolute w-full z-50 duration-500 ease overflow-hidden h-[100px] ${isOpenBurgerMenu ? 'L:h-full L:bg-surface' : 'bg-transparent'}`}>
            <div className={`w-full flex justify-between items-center px-[7%] py-[27px] L:px-[20px] TS:py-[20px] duration-500 ease-out`}>
                <Logo></Logo>
                <nav className="L:hidden flex justify-center items-center gap-[30px] whitespace-nowrap font-semibold text-[16px] text-secondary">
                    <a href="#">Главная</a>
                    <a href="#">О нас</a>
                    <a href="#">Преимущества</a>
                    <a href="#">Оформление</a>
                    <a href="#">Контакты</a>
                </nav>
                <NetworkLinks styleDisplay="L:hidden block" />
                {/* <div className="L:block hidden cursor-pointer" onClick={openBurgerMenu}>
                    <svg className="w-[40px] h-[22px] stroke-accent hover:stroke-accentHover duration-500 ease-in-out transition-colors" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                       
                        <path
                            d="M0 1.8335L40 1.8335"
                            strokeWidth="3"
                            className={`transition-transform duration-500 ease-in-out ${isOpenBurgerMenu ? '-rotate-45' : ''}`}
                        />
                        <path
                            d="M0 11L40 11"
                            strokeWidth="3"
                            className={`transition-transform duration-500 ease-in-out ${isOpenBurgerMenu ? 'rotate-45' : ''}`}
                        />
                        <path
                            d="M10 20.1665L40 20.1665"
                            strokeWidth="3"
                            className={`transition-opacity duration-500 ease-in-out ${isOpenBurgerMenu ? 'opacity-0' : ''}`}                        />
                    </svg>
                </div> */}
                <div
                    onClick={openBurgerMenu}
                    className="cursor-pointer L:block hidden relative w-[40px] h-[22px]"
                >
                    <span
                        className={`absolute top-0 left-0 w-full h-[3px] bg-accent rounded-md transition-transform duration-500 ease-in-out ${isOpenBurgerMenu ? 'rotate-45 translate-y-[9px]' : ''}`}
                    ></span>
                    <span
                        className={`absolute top-[9px] left-0 w-full h-[3px] bg-accent rounded-md transition-opacity duration-300 ease-in-out ${isOpenBurgerMenu ? 'opacity-0' : ''}`}
                    ></span>
                    <span
                        className={`absolute bottom-0 right-0 h-[3px] bg-accent rounded-md duration-500 ease-in-out ${isOpenBurgerMenu ? '-rotate-45 translate-y-[-9px] w-full' : 'w-[80%]'}`}
                    ></span>
                </div>
            </div>
            <div className={`duration-300 ease-in-out ${isOpenBurgerMenu ? 'L:flex L:flex-col L:opacity-100 L:px-[20px]' : 'L:opacity-0'}`}>
                <nav className="flex flex-col justify-center items-left pb-[50px] gap-[20px] whitespace-nowrap font-semibold text-[16px] text-secondary">
                    <a href="#" className="" onClick={closeBurgerMenu}>Главная</a>
                    <a href="#" className="" onClick={closeBurgerMenu}>О нас</a>
                    <a href="#" className="" onClick={closeBurgerMenu}>Преимущества</a>
                    <a href="#" className="" onClick={closeBurgerMenu}>Оформление</a>
                    <a href="#" className="" onClick={closeBurgerMenu}>Контакты</a>
                </nav>
                <NetworkLinks />
            </div>
        </header>
    );
}

export default Header;