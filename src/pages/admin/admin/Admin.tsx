import { FC, useEffect, useState } from "react";
import AllUsersSection from "../../../components/componentsOfPages/admin/admin/AllUsersSection";
import TodayUsersSection from "../../../components/componentsOfPages/admin/admin/TodayUsersSection";
import { UserPhone } from "../../../models/UserPhone";
import LoginHistory from "../../../components/componentsOfPages/admin/admin/LoginHistory";
import { filterUsersPhoneByDate } from "../../../utils/filterUsersPhoneByDate";
import { userPhones_testdata } from "../../../models/testdata";

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
                        <main className="pb-52">
                            <AllUsersSection userPhones={userPhones} />
                            <TodayUsersSection filteredUserPhones={filterUsersPhoneByDate(userPhones)}/>
                            <LoginHistory />
                        </main>
                    : ''}
                </>
                : ''}
        </>
    );
}

export default Admin;