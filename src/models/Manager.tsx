import { Device } from "./Device";

interface Manager {
    manager_id: number,
    manager_name: string,
    login: string,
    password: string,
    devices?: Device[],
}

export type {Manager};