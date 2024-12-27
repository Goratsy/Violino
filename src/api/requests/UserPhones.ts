import { UserPhone } from "../../models/UserPhone";
import URL_server from "./URL";

const BEARER_TOKEN = localStorage.getItem("bearer_token");

// Fetch all user phones
async function fetchUserPhones(): Promise<UserPhone[]> {
    const response = await fetch(`${URL_server}/user_phones`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: BEARER_TOKEN || '',
        },
    });

    if (!response.ok) {
        throw new Error(`Error fetching user phones: ${response.status}`);
    }

    return await response.json();
}

// Create a new user phone
async function createUserPhone(newPhone: Omit<UserPhone, 'user_phone_id'>): Promise<void> {
    const response = await fetch(`${URL_server}/user_phones`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: BEARER_TOKEN || '',
        },
        body: JSON.stringify(newPhone),
    });

    if (!response.ok) {
        throw new Error(`Error creating user phone: ${response.status}`);
    }
}

// Update a specific user phone by ID
async function updateUserPhone(id: number, updatedPhone: Partial<UserPhone>): Promise<void> {
    const response = await fetch(`${URL_server}/user_phones/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: BEARER_TOKEN || '',
        },
        body: JSON.stringify(updatedPhone),
    });

    if (!response.ok) {
        throw new Error(`Error updating user phone: ${response.status}`);
    }
}

// Delete a user phone by ID
async function deleteUserPhone(id: number): Promise<void> {
    const response = await fetch(`${URL_server}/user_phones/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: BEARER_TOKEN || '',
        },
    });

    if (!response.ok) {
        throw new Error(`Error deleting user phone: ${response.status}`);
    }
}


export default {fetchUserPhones, createUserPhone, updateUserPhone, deleteUserPhone};