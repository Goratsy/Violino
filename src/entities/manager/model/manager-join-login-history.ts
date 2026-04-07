interface ManagerJoinLoginHistory {
    manager_id: number,
    manager_name: string,
    login: string,
    date_of_login: string,
    device:	string,
    ip_address:	string,
    failed_login_attempts: number,
}

export type {ManagerJoinLoginHistory};