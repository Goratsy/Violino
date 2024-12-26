import { FC, useEffect, useState } from "react";
import AllUsersSection from "../../../components/componentsOfPages/admin/admin/AllUsersSection";
import TodayUsersSection from "../../../components/componentsOfPages/admin/admin/TodayUsersSection";
import { UserPhone } from "../../../models/UserPhone";
import LoginHistory from "../../../components/componentsOfPages/admin/admin/LoginHistory";
import { filterUsersPhoneByDate } from "../../../utils/filterUsersPhoneByDate";
import { userPhones_testdata } from "../../../models/testdata";
import HeaderAdmin from "../../../components/componentsOfPages/admin/admin/HeaderAdmin";


const Admin: FC = () => {
    let [auth, setAuth] = useState<boolean>(true);
    let [userPhones, setUserPhones] = useState<UserPhone[] | null>(userPhones_testdata);

    useEffect(() => {
        // Authentification
        // Redirecting
        // Requests
    }, []);

    return (
        <>
            {auth ?
                <>
                    {userPhones ?
                        <>
                            <HeaderAdmin />
                            <main className="relative mb-52 top-[130px] T:top-[100px] TS:top-[70px]">
                                <AllUsersSection userPhones={userPhones} />
                                <TodayUsersSection filteredUserPhones={filterUsersPhoneByDate(userPhones)} />
                                <LoginHistory />
                            </main>
                        </>
                    : ''}
                </>
                : ''}
        </>
    );
}

export default Admin;