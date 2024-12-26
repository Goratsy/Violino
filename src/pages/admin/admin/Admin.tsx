import { FC } from "react";
import AllUsersSection from "../../../components/componentsOfPages/admin/admin/AllUsersSection";
import TodayUsersSection from "../../../components/componentsOfPages/admin/admin/TodayUsersSection";

const Admin: FC = () => {
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