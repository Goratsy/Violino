import { UserPhone } from "../models/UserPhone";


const filterUsersPhoneByLastDate = (userPhones: UserPhone[]): UserPhone[] => {
    let date = new Date();
    return userPhones.filter((userPhone) => {
        let userData = userPhone.date_of_send.split('.');
        return (Number(userData[0]) === date.getDate()) && (Number(userData[1]) === date.getMonth() + 1) && (Number(userData[2]) < date.getFullYear());
    });
}

export {filterUsersPhoneByLastDate}