import { Manager } from "../../models/Manager";
import URL_server from "./URL";

const BEARER_TOKEN = localStorage.getItem("bearer_token");

// Fetch all managers
async function fetchManagers(): Promise<Manager[]> {
    const response = await fetch(`${URL_server}/managers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: BEARER_TOKEN || '',
        },
    });

    if (!response.ok) {
        throw new Error(`Error fetching managers: ${response.status}`);
    }

    return await response.json();
}

// Log a manager's login
async function logManagerLogin(loginData: {
    login: string;
    password: string;
    date_of_login: string;
    device: string;
    ip_address: string;
}): Promise<string> {
    const response = await fetch(`${URL_server}/managers/logins`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    });

    if (!response.ok) {
        throw new Error(`Error logging manager login: ${response.status}`);
    }

    const data = await response.json();
    return data.token;
}

export default {fetchManagers, logManagerLogin};