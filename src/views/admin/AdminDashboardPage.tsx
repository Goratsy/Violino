'use client';

import { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { ManagerJoinLoginHistory } from "@/entities/manager/model/manager-join-login-history";
import { UserPhone } from "@/entities/user-phone/model/types";
import AddUserPhones from "@/features/user-phone/create/ui/AddUserPhones";
import { authentificationManager, getAllManagers, getAllUserPhones } from "@/shared/api/requests";
import { useAuth } from "@/shared/lib/contexts/auth-context";
import { usePopup } from "@/shared/lib/contexts/popup-context";
import { filterUsersPhoneByDate } from "@/shared/lib/utils/filterUsersPhoneByDate";
import { filterUsersPhoneByLastDate } from "@/shared/lib/utils/filterUsersPhoneByLastDate";
import AllUsersSection from "@/widgets/admin/all-users-section/AllUsersSection";
import HeaderAdmin from "@/widgets/admin/header/HeaderAdmin";
import LastYearUserSection from "@/widgets/admin/last-year-users-section/LastYearUsersSection";
import LoginHistory from "@/widgets/admin/login-history/LoginHistory";
import TodayUsersSection from "@/widgets/admin/today-users-section/TodayUsersSection";

const Admin: FC = () => {
    const newUserPhone = '/assets/mp3/newUserPhone.mp3';
    let { isAuthenticated, setIsAuthenticated } = useAuth();
    let { setSteckMessages } = usePopup();

    let [userPhones, setUserPhones] = useState<UserPhone[]>([]);
    let [managers, setManagers] = useState<ManagerJoinLoginHistory[]>([]);

    const audio = useRef<HTMLAudioElement | null>(null);
    const audioAllowed = useRef(false);
    const userPhonesRef = useRef<UserPhone[]>([]);

    const router = useRouter();

    const getAuthentification = async (): Promise<boolean> => {
        const response = await authentificationManager();
        return response.code == 200;
    }

    const getDataOfUserPhones = async () => {
        const response_userphone = await getAllUserPhones();

        if (response_userphone.code >= 200 && response_userphone.code <= 299) {
            return response_userphone.data;
        } else if (response_userphone.code === 401) {
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Сессия не может быть открыта для вам. Вам следует войти в панель администратора!' }, ...prevMessages]);
            setIsAuthenticated(false);
        } else if (response_userphone.code === 403) {
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Сессия не может быть открыта для вам. Вам следует войти в панель администратора!' }, ...prevMessages]);
            setIsAuthenticated(false);
        } else {
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Ошибка сервера :(' }, ...prevMessages]);
        }
    }

    const getDataOfManager = async () => {
        const response_managers = await getAllManagers();

        if (response_managers.code >= 200 && response_managers.code <= 299) {
            setManagers((response_managers.data || []));
        } else if (response_managers.code === 401) {
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Сессия не может быть открыта для вам. Вам следует войти в панель администратора!' }, ...prevMessages]);
            setIsAuthenticated(false);
        } else if (response_managers.code === 403) {
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Сессия не может быть открыта для вам. Вам следует войти в панель администратора!' }, ...prevMessages]);
            setIsAuthenticated(false);
        } else {
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Ошибка сервера :(' }, ...prevMessages]);
        }
    }

    useEffect(() => {
        const checkAuthAndFetchData = async () => {

            const auth: boolean = await getAuthentification();
            setIsAuthenticated(auth);

            if (!auth) {
                router.replace('/admin/login');
                return;
            }

            try {
                let dataOfUserPhones = await getDataOfUserPhones();
                setUserPhones(dataOfUserPhones || []);
                userPhonesRef.current = dataOfUserPhones || [];
                await getDataOfManager();
            } catch (error) {
                setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Произошла ошибка при получении данных' }, ...prevMessages]);
            }
        };

        void checkAuthAndFetchData();
    }, [router, setIsAuthenticated, setSteckMessages]);

    useEffect(() => {
        audio.current = new Audio(newUserPhone);

        const enableAudio = () => {
            if (!audio.current) {
                return;
            }

            audio.current.play().then(() => {
                audio.current?.pause();
                if (audio.current) {
                    audio.current.currentTime = 0;
                }
                audioAllowed.current = true;
            }).catch();
        };

        document.addEventListener('click', enableAudio, { once: true });
        document.addEventListener('scroll', enableAudio, { once: true });

        return () => { document.removeEventListener('click', enableAudio); document.removeEventListener('scroll', enableAudio) };
    }, []);

    useEffect(() => {
        const interval = setInterval(async () => {
            const dataOfUserPhones = await getDataOfUserPhones();
    
            if (dataOfUserPhones && dataOfUserPhones.length > userPhonesRef.current.length) {
                setSteckMessages((prevMessages) => [
                    { isErrorPopup: false, message: 'Данные обновились. Проверьте сегодняшние заявки' },
                    ...prevMessages
                ]);
    
                if (audioAllowed.current && audio.current) {
                    audio.current.play().catch(err => console.error('Ошибка воспроизведения аудио:', err));
                }
    
                setUserPhones(dataOfUserPhones);
                userPhonesRef.current = dataOfUserPhones;
            }
        }, 30000);
    
        return () => clearInterval(interval);
    }, [setSteckMessages]);



    return (
        <>
            {isAuthenticated ?
                <>
                    {userPhones.length > 0 ?
                        <>
                            <HeaderAdmin />
                            <main className="relative mb-64">
                                <AllUsersSection userPhones={userPhones} />
                                <TodayUsersSection filteredUserPhones={filterUsersPhoneByDate(userPhones)} />
                                <LastYearUserSection filteredUserPhones={filterUsersPhoneByLastDate(userPhones)} />
                                <AddUserPhones/>
                                {managers ? <LoginHistory managers={managers} /> : ''}
                            </main>
                        </>
                        : ''}
                </>
                : ''}
        </>
    );
}

export default Admin;
