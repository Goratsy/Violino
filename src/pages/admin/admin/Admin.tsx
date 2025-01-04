import { FC, useContext, useEffect, useState } from "react";
import AllUsersSection from "../../../components/componentsOfPages/admin/admin/AllUsersSection";
import TodayUsersSection from "../../../components/componentsOfPages/admin/admin/TodayUsersSection";
import { UserPhone } from "../../../models/UserPhone";
import LoginHistory from "../../../components/componentsOfPages/admin/admin/LoginHistory";
import { filterUsersPhoneByDate } from "../../../utils/filterUsersPhoneByDate";
import { managers_testdata, userPhones_testdata } from "../../../models/testdata";
import HeaderAdmin from "../../../components/componentsOfPages/admin/admin/HeaderAdmin";
import { Manager as IManager } from "../../../models/Manager";
import { useNavigate } from "react-router-dom";
import { AuthentificationContext } from "../../../App";
import { getAllManagers, getAllUserPhones } from "../../../api/requests/Requests";
import { Helmet } from "react-helmet-async";

const Admin: FC = () => {
    let { isAuthenticated, setIsAuthenticated } = useContext(AuthentificationContext);
    let [userPhones, setUserPhones] = useState<UserPhone[] | undefined>(userPhones_testdata); // Убрать тестовые данные
    let [managers, setManagers] = useState<IManager[] | undefined>(managers_testdata); // Убрать тестовые данные
    let navigate = useNavigate();

    const getData = async () => {
        const response_userphone = await getAllUserPhones();
        if (response_userphone.code >= 200 && response_userphone.code <= 299) {
            setUserPhones(response_userphone.data);
        } else if (response_userphone.code === 401) {
            console.log('Сессия не может быть открыта для вам. Вам следует войти в панель администратора!');
            setIsAuthenticated(false);
        } else {
            console.log('Произошла ошибка при получении данных: ' + String(response_userphone.error) + 'Перезагрузите страницу, чтобы снова получить данные');
        }

        const response_managers = await getAllManagers();
        if (response_managers.code >= 200 && response_managers.code <= 299) {
            setManagers(response_managers.data);
        } else if (response_managers.code === 401) {
            console.log('Сессия не может быть открыта для вам. Вам следует войти в панель администратора!');
            setIsAuthenticated(false);
        } else {
            console.log('Произошла ошибка при получении данных: ' + String(response_managers.error) + 'Перезагрузите страницу, чтобы снова получить данные');
        }
    }

    useEffect(() => {
        // Authentification
        // Redirecting
        if (!isAuthenticated) {
            navigate('/');
            return;
        }
        // Requests
        try {
            getData();
        } catch (error) {
            console.log('Произошла ошибка при получении данных: ' + String(error) + ' Перезагрузите страницу, чтобы снова получить данные');
        }

    }, [isAuthenticated]);

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
                            <main className="relative mb-52 top-[130px] T:top-[100px] TS:top-[70px]">
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