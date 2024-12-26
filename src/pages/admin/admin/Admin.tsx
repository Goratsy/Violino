import { FC, useEffect, useState } from "react";
import AllUsersSection from "../../../components/componentsOfPages/admin/admin/AllUsersSection";
import TodayUsersSection from "../../../components/componentsOfPages/admin/admin/TodayUsersSection";
import { UserPhone } from "../../../models/UserPhone";

const Admin: FC = () => {
    let [userPhones, setUserPhones] = useState<UserPhone[]>();

    useEffect(() => {
        // Authentification
        // Redirecting
        // Requests
    }, []);

    return (
        <>
            <main className="pb-52">
                <AllUsersSection/>
                <TodayUsersSection/>
            </main>
        </>
    );
}

export default Admin;