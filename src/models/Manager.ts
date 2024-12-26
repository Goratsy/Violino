import { LoginHistory } from "./LoginHistory";

interface Manager {
    manager_id: number,
    manager_name: string,
    login: string,
    password: string,
    devices?: LoginHistory[],
}

export type {Manager};