import { UserPhone } from "../models/UserPhone";

export default function filterUsersPhoneByInput(userPhones: UserPhone[], filterText: string):UserPhone[]  {
    if (!filterText) return userPhones;
    return userPhones.filter((userPhone) => {
        const filterById = String(userPhone.user_phone_id).includes(filterText);
        const filterByName = userPhone.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase());
        const filterByPhone = userPhone.phone.toLocaleLowerCase().includes(filterText.toLocaleLowerCase());
        const filterByDate = userPhone.date_of_send.includes(filterText.toLocaleLowerCase());
        const filterByInfo = (userPhone.information_about_user ? userPhone.information_about_user.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) : false);

        return filterById || filterByName || filterByPhone || filterByDate || filterByInfo;
    });
}