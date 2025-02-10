import { FC, useContext, useEffect, useRef, useState } from "react";
import AllUsersSection from "../../../components/componentsOfPages/admin/admin/AllUsersSection";
import TodayUsersSection from "../../../components/componentsOfPages/admin/admin/TodayUsersSection";
import { UserPhone } from "../../../models/UserPhone";
import LoginHistory from "../../../components/componentsOfPages/admin/admin/LoginHistory";
import { filterUsersPhoneByDate } from "../../../utils/filterUsersPhoneByDate";
import HeaderAdmin from "../../../components/componentsOfPages/admin/admin/HeaderAdmin";

import { useNavigate } from "react-router-dom";
import { AuthentificationContext, PopupContext } from "../../../App";
import { authentificationManager, getAllManagers, getAllUserPhones } from "../../../api/requests/Requests";
import { Helmet } from "react-helmet-async";
import { ManagerJoinLoginHistory } from "../../../models/ManagerJoinLoginHistory";
import LastYearUserSection from "../../../components/componentsOfPages/admin/admin/LastYearUsersSection";
import { filterUsersPhoneByLastDate } from "../../../utils/filterUsersPhoneByLastDate";
import newUserPhone from '../../../assets/mp3/newUserPhone.mp3';
import AddUserPhones from "../../../components/componentsOfPages/admin/admin/AddUserPhones";

const Admin: FC = () => {
    let { isAuthenticated, setIsAuthenticated } = useContext(AuthentificationContext);
    let { steckMessages, setSteckMessages } = useContext(PopupContext);

    let [userPhones, setUserPhones] = useState<UserPhone[]>([]);
    let [managers, setManagers] = useState<ManagerJoinLoginHistory[]>([]);

    // let [flag, setFlag] = useState<boolean>(false);
    const audio = useRef(new Audio(newUserPhone));
    const audioAllowed = useRef(false);
    const userPhonesRef = useRef<UserPhone[]>([]);

    let navigate = useNavigate();

    // let audioAllowed = false;
    // const audio = new Audio(newUserPhone);

    // function enableAudio() {
    //     if (!audioAllowed) {
    //         audio.play().then(() => {
    //             audio.pause();
    //             audio.currentTime = 0;
    //             audioAllowed = true;
    //         }).catch(() => {
    //             return;
    //         });
    //     }
    // }

    // document.addEventListener('click', enableAudio, { once: true });
    // document.addEventListener('scroll', enableAudio, { once: true });

    const getAuthentification = async (): Promise<boolean> => {
        const response = await authentificationManager();
        return response.code == 200;
    }

    const getDataOfUserPhones = async () => {
        const response_userphone = await getAllUserPhones();

        if (response_userphone.code >= 200 && response_userphone.code <= 299) {
            return response_userphone.data;
        } else if (response_userphone.code === 401) {
            setSteckMessages([{ isErrorPopup: true, message: 'Сессия не может быть открыта для вам. Вам следует войти в панель администратора!' }, ...(steckMessages || [])]);
            setIsAuthenticated(false);
        } else if (response_userphone.code === 403) {
            setSteckMessages([{ isErrorPopup: true, message: 'Сессия не может быть открыта для вам. Вам следует войти в панель администратора!' }, ...(steckMessages || [])]);
            setIsAuthenticated(false);
        } else {
            setSteckMessages([{ isErrorPopup: true, message: 'Ошибка сервера :(' }, ...(steckMessages || [])]);
        }
    }

    const getDataOfManager = async () => {
        const response_managers = await getAllManagers();

        if (response_managers.code >= 200 && response_managers.code <= 299) {
            setManagers((response_managers.data || []));
        } else if (response_managers.code === 401) {
            setSteckMessages([{ isErrorPopup: true, message: 'Сессия не может быть открыта для вам. Вам следует войти в панель администратора!' }, ...(steckMessages || [])]);
            setIsAuthenticated(false);
        } else if (response_managers.code === 403) {
            setSteckMessages([{ isErrorPopup: true, message: 'Сессия не может быть открыта для вам. Вам следует войти в панель администратора!' }, ...(steckMessages || [])]);
            setIsAuthenticated(false);
        } else {
            setSteckMessages([{ isErrorPopup: true, message: 'Ошибка сервера :(' }, ...(steckMessages || [])]);
        }
    }

    useEffect(() => {
        const checkAuthAndFetchData = async () => {

            const auth: boolean = await getAuthentification();
            setIsAuthenticated(auth);

            if (!auth) {
                navigate('/admin/login');
                return;
            }

            try {
                let dataOfUserPhones = await getDataOfUserPhones();
                setUserPhones(dataOfUserPhones || []);
                userPhonesRef.current = dataOfUserPhones || [];
                await getDataOfManager();
                // setFlag(!flag);
            } catch (error) {
                setSteckMessages([{ isErrorPopup: true, message: 'Произошла ошибка при получении данных' }, ...(steckMessages || [])]);
            }
        };

        checkAuthAndFetchData();
    }, [isAuthenticated]);

    useEffect(() => {
        const enableAudio = () => {
            audio.current.play().then(() => {
                audio.current.pause();
                audio.current.currentTime = 0;
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
    
            if (dataOfUserPhones && dataOfUserPhones.length > userPhones.length) {
                setSteckMessages(prevMessages => [
                    { isErrorPopup: false, message: 'Данные обновились. Проверьте сегодняшние заявки' },
                    ...prevMessages
                ]);
    
                if (audioAllowed.current) {
                    audio.current.play().catch(err => console.error('Ошибка воспроизведения аудио:', err));
                }
    
                setUserPhones(dataOfUserPhones);
            }
        }, 30000);
    
        return () => clearInterval(interval);
    }, [userPhones]);



    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
                <title>Панель администратора</title>
            </Helmet>
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