import { UserPhone } from "../models/UserPhone";

export default function filterUsersPhoneByInput(userPhones: UserPhone[], filterText: string):UserPhone[]  {
    if (!filterText) return userPhones;
    return userPhones.filter((userPhone) => {
        const filterById = String(userPhone.user_phone_id).includes(filterText);
        const filterByName = userPhone.name.includes(filterText);
        const filterByPhone = userPhone.phone.includes(filterText);
        const filterByDate = userPhone.date_of_send.includes(filterText);
        const filterByInfo = (userPhone.information_about_user ? userPhone.information_about_user.includes(filterText) : false);

        return filterById || filterByName || filterByPhone || filterByDate || filterByInfo;
    });
}