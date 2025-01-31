import { FC, useContext, useEffect, useState } from "react";
import AllUsersSection from "../../../components/componentsOfPages/admin/admin/AllUsersSection";
import TodayUsersSection from "../../../components/componentsOfPages/admin/admin/TodayUsersSection";
import { UserPhone } from "../../../models/UserPhone";
import LoginHistory from "../../../components/componentsOfPages/admin/admin/LoginHistory";
import { filterUsersPhoneByDate } from "../../../utils/filterUsersPhoneByDate";
// import { managers_testdata, userPhones_testdata } from "../../../models/testdata";
import HeaderAdmin from "../../../components/componentsOfPages/admin/admin/HeaderAdmin";

import { useNavigate } from "react-router-dom";
import { AuthentificationContext } from "../../../App";
import { authentificationManager, getAllManagers, getAllUserPhones } from "../../../api/requests/Requests";
import { Helmet } from "react-helmet-async";
import { ManagerJoinLoginHistory } from "../../../models/ManagerJoinLoginHistory";

const Admin: FC = () => {
    let { isAuthenticated, setIsAuthenticated } = useContext(AuthentificationContext);
    let [userPhones, setUserPhones] = useState<UserPhone[] | undefined>();
    let [managers, setManagers] = useState<ManagerJoinLoginHistory[] | undefined>();
    // let [isLoading, setIsLoading] = useState<boolean>(true);
    let navigate = useNavigate();

    const getAuthentification = async (): Promise<boolean> => {
        const response = await authentificationManager();
        return response.code == 200;
    }

    const getData = async () => {
        const response_userphone = await getAllUserPhones();

        if (response_userphone.code >= 200 && response_userphone.code <= 299) {
            setUserPhones(response_userphone.data);
        } else if (response_userphone.code === 401) {
            console.log('Сессия не может быть открыта для вам. Вам следует войти в панель администратора!');
            setIsAuthenticated(false);
        } else {
            console.log('Произошла ошибка при получении данных: ' + String(response_userphone.error));
        }

        const response_managers = await getAllManagers();

        if (response_managers.code >= 200 && response_managers.code <= 299) {
            setManagers(response_managers.data);
        } else if (response_managers.code === 401) {
            console.log('Сессия не может быть открыта для вам. Вам следует войти в панель администратора!');
            setIsAuthenticated(false);
        } else {
            console.log('Произошла ошибка при получении данных: ' + String(response_managers.error));
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
                await getData();
            } catch (error) {
                console.error('Произошла ошибка при получении данных:', error);
            }
        };
    
        checkAuthAndFetchData();
    }, []);

    // useEffect(() => {
    //     const checkAuth = async (): Promise<void> => {
    //         // Authentification
    //         setIsLoading(true);
    //         let auth: boolean = await getAuthentification();
    //         setIsAuthenticated(auth);
    //         setIsLoading(false);
    //     }
    //     checkAuth();
    // }, [])

    // useEffect(() => {
    //     if (isLoading) return;

    //     if (!isAuthenticated) {
    //         navigate('/admin/login');
    //         return;
    //     }

    //     try {
    //         getData();
    //     } catch (error) {
    //         console.log('Произошла ошибка при получении данных: ' + String(error));
    //     }
    // }, [isAuthenticated, isLoading]);

    

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
                <title>Панель администратора</title>
            </Helmet>
            {isAuthenticated ?
                <>
                    {userPhones ?
                        <>
                            <HeaderAdmin />
                            <main className="relative mb-64 top-[130px] T:top-[100px] TS:top-[70px]">
                                <AllUsersSection userPhones={userPhones} />
                                <TodayUsersSection filteredUserPhones={filterUsersPhoneByDate(userPhones)} />
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