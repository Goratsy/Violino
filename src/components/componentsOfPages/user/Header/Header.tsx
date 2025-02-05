import { FC, useEffect, useState } from "react";
import NetworkLinks from "../../../UI/networkLinks/NetworkLinks";
import Logo from "../../../UI/logo/Logo";

const Header: FC = () => {
    let [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);

    let openBurgerMenu = (): void => {
        setIsOpenBurgerMenu(!isOpenBurgerMenu);
    }

    let closeBurgerMenu = (): void => {
        setIsOpenBurgerMenu(false);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsOpenBurgerMenu(false);
            document.body.style.overflow = '';
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

    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            setShowHeader(true);
        } else if (currentScrollY > lastScrollY) {
            setShowHeader(false);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`${lastScrollY !== 0 ? `fixed bg-surface` : 'absolute bg-transparent'} ${showHeader ? 'translate-y-0' : (lastScrollY === 0 ? 'translate-y-0' : '-translate-y-full')} w-full z-50 duration-500 ease overflow-hidden h-[105px] TS:h-[100px] P:h-[90px] ${isOpenBurgerMenu ? 'L:h-full TS:h-full P:h-full L:bg-surface' : ''}`}>
            <div className={`w-full flex justify-between items-center px-[7%] my-[27px] L:px-[20px] duration-500 ease-out`}>
                <Logo></Logo>
                <nav className="L:hidden flex justify-center items-center gap-[30px] whitespace-nowrap font-semibold text-[16px] text-secondary selection:bg-accent selection:text-white">
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#homeSection">Главная</a>
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#aboutSection">О нас</a>
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#advantagesSection">Преимущества</a>
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#formalisation">Оформление</a>
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#contacts">Контакты</a>
                </nav>
                <NetworkLinks styleDisplay="L:hidden block" />
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
                        className={`absolute bottom-0 right-0 h-[3px] bg-accent transition-transform rounded-md duration-500 ease-in-out ${isOpenBurgerMenu ? '-rotate-45 translate-y-[-9px] w-full' : 'w-[80%]'}`}
                    ></span>
                </div>
            </div>
            <div className={`duration-300 ease-in-out ${isOpenBurgerMenu ? 'L:flex L:flex-col L:opacity-100 L:px-[20px]' : 'opacity-0 absolute'}`}>
                <nav className="flex flex-col justify-center items-left pb-[35px] gap-[20px] whitespace-nowrap font-semibold text-[16px] text-secondary selection:bg-accent selection:text-white">
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#homeSection"  onClick={closeBurgerMenu}>Главная</a>
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#aboutSection"  onClick={closeBurgerMenu}>О нас</a>
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#advantagesSection"  onClick={closeBurgerMenu}>Преимущества</a>
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#formalisation"  onClick={closeBurgerMenu}>Оформление</a>
                    <a className="flex items-center justify-center duration-500 ease-in-out transition-opacity hover:opacity-70" href="#contacts"  onClick={closeBurgerMenu}>Контакты</a>
                </nav>
                <NetworkLinks />
            </div>
        </header>
    );
}

export default Header;