import { UserPhone } from "../models/UserPhone";


const filterUsersPhoneByDate = (userPhones: UserPhone[]): UserPhone[] => {
    let date = new Date();
    return userPhones.filter((userPhone) => {
        let userData = new Date(userPhone.date_of_send);
        
        return (userData.getDate() === date.getDate()) && (userData.getMonth() === date.getMonth()) && (userData.getFullYear() === date.getFullYear());
    });
}

export {filterUsersPhoneByDate}