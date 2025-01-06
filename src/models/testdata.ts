import { Manager } from "./Manager";
import { UserPhone } from "./UserPhone";

const userPhones_testdata: UserPhone[] = [
    {
        user_phone_id: 1,
        name: "Иван Иванов",
        phone: "+7 (900) 123-45-67",
        date_of_send: "2023-10-01",
        information_about_user: "Постоянный клиент"
    },
    {
        user_phone_id: 2,
        name: "Мария Петрова",
        phone: "+7 (900) 234-56-78",
        date_of_send: "2023-10-02"
    },
    {
        user_phone_id: 3,
        name: "Сергей Сидоров",
        phone: "+7 (900) 345-67-89",
        date_of_send: "2024-12-27",
        information_about_user: "Новый пользователь"
    },
    {
        user_phone_id: 4,
        name: "Анна Смирнова",
        phone: "+7 (900) 456-78-90",
        date_of_send: "2025-01-07"
    },
    {
        user_phone_id: 5,
        name: "Дмитрий Кузнецов",
        phone: "+7 (900) 567-89-01",
        date_of_send: "2023-10-05",
        information_about_user: "Пробный период"
    },
    {
        user_phone_id: 6,
        name: "Елена Васильева",
        phone: "+7 (900) 678-90-12",
        date_of_send: "2023-10-06"
    },
    {
        user_phone_id: 7,
        name: "Алексей Федоров",
        phone: "+7 (900) 789-01-23",
        date_of_send: "2023-10-07",
        information_about_user: "Лояльный клиент"
    },
    {
        user_phone_id: 8,
        name: "Ольга Николаева",
        phone: "+7 (900) 890-12-34",
        date_of_send: "2023-10-08"
    },
    {
        user_phone_id: 9,
        name: "Игорь Павлов",
        phone: "+7 (900) 901-23-45",
        date_of_send: "2023-10-09",
        information_about_user: "VIP клиент"
    },
    {
        user_phone_id: 10,
        name: "Татьяна Романова",
        phone: "+7 (900) 012-34-56",
        date_of_send: "2023-10-10"
    }
];

const managers_testdata: Manager[] = [
    {
        manager_id: 1,
        manager_name: "Александр Смирнов",
        login: "alex.smirnov",
        password: "securepassword123",
        loginHistory: [
            {
                date_of_login: "2023-10-01",
                device: "Ноутбук",
                ip_address: "192.168.1.1",
                failed_login_attempts: 0,
                active_tokens: 2
            },
            {
                date_of_login: "2023-10-02",
                device: "Смартфон",
                ip_address: "192.168.1.2",
                failed_login_attempts: 1,
                active_tokens: 1
            },
            {
                date_of_login: "2023-10-03",
                device: "Планшет",
                ip_address: "192.168.1.3",
                failed_login_attempts: 0,
                active_tokens: 2
            }
        ]
    },
    {
        manager_id: 2,
        manager_name: "Мария Коваленко",
        login: "maria.kovalenko",
        password: "anothersecurepassword456",
        loginHistory: [
            {
                date_of_login: "2023-10-04",
                device: "Ноутбук",
                ip_address: "192.168.2.1",
                failed_login_attempts: 0,
                active_tokens: 3
            },
            {
                date_of_login: "2023-10-05",
                device: "Смартфон",
                ip_address: "192.168.2.2",
                failed_login_attempts: 2,
                active_tokens: 1
            },
            {
                date_of_login: "2023-10-06",
                device: "Планшет",
                ip_address: "192.168.2.3",
                failed_login_attempts: 0,
                active_tokens: 2
            }
        ]
    }
];

export {managers_testdata, userPhones_testdata};