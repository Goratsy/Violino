import { Manager } from "../../models/Manager";
import { UserPhone } from "../../models/UserPhone";

const BASE_URL = "http://localhost:4000";
const AUTH_TOKEN = String(localStorage.getItem("bearer_token")); // Замените на актуальный токен

interface ApiResponse<T> {
    code: number;
    data?: T;
    error?: string;
}

async function apiFetch<T>(url: string, options: RequestInit): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                "Authorization": AUTH_TOKEN,
                ...(options.headers || {}),
            },
        });
        const data = await response.json();
        return {
            code: response.status,
            data: response.ok ? data : undefined,
            error: response.ok ? undefined : data.message || "Unknown error",
        };
    } catch (error) {
        return {
            code: 500,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}

// Запросы
export async function getAllUserPhones(): Promise<ApiResponse<UserPhone[]>> {
    return apiFetch<UserPhone[]>(`${BASE_URL}/user_phones`, { method: "GET" });
}

export async function createUserPhone(userPhone: Omit<UserPhone, "user_phone_id">): Promise<ApiResponse<UserPhone>> {
    return apiFetch<UserPhone>(`${BASE_URL}/user_phones`, {
        method: "POST",
        body: JSON.stringify(userPhone),
    });
}

export async function updateUserPhone(userPhone: UserPhone[]): Promise<ApiResponse<UserPhone>> {
    return apiFetch<UserPhone>(`${BASE_URL}/user_phones/`, {
        method: "PUT",
        body: JSON.stringify(userPhone),
    });
}

export async function deleteUserPhone(id: number): Promise<ApiResponse<null>> {
    return apiFetch<null>(`${BASE_URL}/user_phones/${id}`, { method: "DELETE" });
}

export async function getAllManagers(): Promise<ApiResponse<Manager[]>> {
    return apiFetch<Manager[]>(`${BASE_URL}/managers`, { method: "GET" });
}

export async function logManagerLogin(loginData: {
    login: string;
    password: string;
    date_of_login: string;
    device: string;
    ip_address: string;
}): Promise<ApiResponse<{ token: string }>> {
    return apiFetch<{ token: string }>(`${BASE_URL}/managers/logins`, {
        method: "POST",
        body: JSON.stringify(loginData),
    });
}
