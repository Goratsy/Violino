import { UserPhone } from "../models/UserPhone";


const filterUsersPhoneByDate = (userPhones: UserPhone[]): UserPhone[] => {
    let date = new Date();
    return userPhones.filter((userPhone) => userPhone.date_of_send === String(date.getDate()));
}

export {filterUsersPhoneByDate};