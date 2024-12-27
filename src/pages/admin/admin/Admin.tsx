import { FC, useEffect, useState } from "react";
import AllUsersSection from "../../../components/componentsOfPages/admin/admin/AllUsersSection";
import TodayUsersSection from "../../../components/componentsOfPages/admin/admin/TodayUsersSection";
import { UserPhone } from "../../../models/UserPhone";
import LoginHistory from "../../../components/componentsOfPages/admin/admin/LoginHistory";
import { filterUsersPhoneByDate } from "../../../utils/filterUsersPhoneByDate";
import { managers_testdata, userPhones_testdata } from "../../../models/testdata";
import HeaderAdmin from "../../../components/componentsOfPages/admin/admin/HeaderAdmin";
import { Manager } from "../../../models/Manager";
import { useNavigate } from "react-router-dom";


const Admin: FC = () => {
    let [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
    let [userPhones, setUserPhones] = useState<UserPhone[] | null>(userPhones_testdata);
    let [managers, setManagers] = useState<Manager[] | null>(managers_testdata);
    let navigate = useNavigate();

    useEffect(() => {
        // Authentification
        
        // Redirecting
        if (!isAuthenticated) {
            navigate('/');
        }
        // Requests
    }, []);

    return (
        <>
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