'use client';

import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/shared/lib/contexts/auth-context";
import { usePopup } from "@/shared/lib/contexts/popup-context";
import { getStoredStaff, clearSession } from "@/features/auth/lib/session";
import { verifyAdminSession } from "@/features/auth/api/auth";
import HeaderAdmin from "@/widgets/admin/header/HeaderAdmin";
import AdminAuthSummary from "@/features/auth/ui/AdminAuthSummary";
import type { AuthLoginResponse } from "@/shared/api/generated";

const Admin: FC = () => {
    let { isAuthenticated, setIsAuthenticated } = useAuth();
    let { setSteckMessages } = usePopup();
    const [staff, setStaff] = useState<AuthLoginResponse['staff'] | null>(null);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const checkAuthAndFetchData = async () => {
            try {
                const auth = await verifyAdminSession();

                if (!auth) {
                    clearSession();
                    setIsAuthenticated(false);
                    router.replace('/admin/login');
                    return;
                }

                setStaff(getStoredStaff());
                setIsAuthenticated(true);
            } catch {
                clearSession();
                setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Не удалось проверить текущую сессию администратора' }, ...prevMessages]);
                setIsAuthenticated(false);
                router.replace('/admin/login');
            } finally {
                setIsCheckingAuth(false);
            }
        };

        void checkAuthAndFetchData();
    }, [router, setIsAuthenticated, setSteckMessages]);

    if (isCheckingAuth) {
        return null;
    }

    return (
        <>
            {isAuthenticated ?
                <>
                    <HeaderAdmin />
                    <AdminAuthSummary staff={staff} />
                </>
                : ''}
        </>
    );
}

export default Admin;
