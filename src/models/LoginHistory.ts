interface LoginHistory {
    date_of_login: string,
    device:	string,
    ip_address:	string,
    failed_login_attempts: number,
    active_tokens: number,
}

export type {LoginHistory};