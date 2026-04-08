import { ChangeEvent, FC, FormEvent, useMemo, useState } from "react";
import { InputMask } from 'primereact/inputmask';
import { createPublicOrder } from "@/shared/api/public";
import type { CatalogItem, GroupedCatalog } from "@/shared/api/generated";
import { usePopup } from "@/shared/lib/contexts/popup-context";
import AnimatedElementFade from "@/shared/ui/AnimatedElementFade";
import ButtonSubmit from "@/shared/ui/button/ButtonSubmit";
import Input from "@/shared/ui/input/Input";
import Logo from "@/shared/ui/logo/Logo";
import YandexMap from "@/shared/ui/map/YandexMap";
import NetworkLinks from "@/shared/ui/networkLinks/NetworkLinks";
import H2 from "@/shared/ui/text/H2";
import H3 from "@/shared/ui/text/H3";
import HeadingOfSection from "@/shared/ui/text/HeadingOfSection";
import Subtitle from "@/shared/ui/text/Subtitle";
import TextFooter from "@/shared/ui/text/TextFooter";
import TextMain from "@/shared/ui/text/TextMain";
import Textarea from "@/shared/ui/textarea/Textarea";

type FooterProps = {
    catalog: GroupedCatalog | null;
    isCatalogLoading: boolean;
    catalogError: string | null;
    onRetryCatalog: () => Promise<void>;
};

type SelectedItems = Record<number, number>;

const catalogGroups: Array<{ key: keyof GroupedCatalog; label: string }> = [
    { key: 'fillings', label: 'Начинки' },
    { key: 'decorations', label: 'Декоры' },
    { key: 'styles', label: 'Стили' },
];

const Footer: FC<FooterProps> = ({ catalog, isCatalogLoading, catalogError, onRetryCatalog }) => {
    let [fullName, setFullName] = useState<string>('');
    let [phone, setPhone] = useState<string>('');
    let [email, setEmail] = useState<string>('');
    let [address, setAddress] = useState<string>('');
    let [deliveryAddress, setDeliveryAddress] = useState<string>('');
    let [deliveryDate, setDeliveryDate] = useState<string>('');
    let [additionalInfo, setAdditionalInfo] = useState<string>('');
    let [comment, setComment] = useState<string>('');
    let [selectedItems, setSelectedItems] = useState<SelectedItems>({});
    let [isNameInputError, setIsNameInputError] = useState<boolean>(false);
    let [isPhoneInputError, setIsPhoneInputError] = useState<boolean>(false);
    let [isItemsInputError, setIsItemsInputError] = useState<boolean>(false);
    let [isSubmittingOrder, setIsSubmittingOrder] = useState<boolean>(false);

    let { setSteckMessages } = usePopup();

    const selectedOrderItems = useMemo(
        () =>
            Object.entries(selectedItems)
                .filter(([, quantity]) => quantity > 0)
                .map(([catalogItemId, quantity]) => ({
                    catalogItemId: Number(catalogItemId),
                    quantity,
                })),
        [selectedItems],
    );

    const resetForm = () => {
        setFullName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setDeliveryAddress('');
        setDeliveryDate('');
        setAdditionalInfo('');
        setComment('');
        setSelectedItems({});
        setIsNameInputError(false);
        setIsPhoneInputError(false);
        setIsItemsInputError(false);
    };

    const toggleCatalogItem = (catalogItemId: number, checked: boolean) => {
        setSelectedItems((prevState) => {
            const nextState = { ...prevState };

            if (checked) {
                nextState[catalogItemId] = nextState[catalogItemId] || 1;
            } else {
                delete nextState[catalogItemId];
            }

            return nextState;
        });
        setIsItemsInputError(false);
    };

    const changeCatalogQuantity = (catalogItemId: number, quantity: number) => {
        setSelectedItems((prevState) => ({
            ...prevState,
            [catalogItemId]: Math.max(1, quantity),
        }));
        setIsItemsInputError(false);
    };

    const sendOrder = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmittingOrder(true);

        const patternName = /^[A-Za-zА-Яа-яЁё\s]+$/;
        if (fullName && !patternName.test(fullName)) {
            setIsNameInputError(true);
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Введите имя без специальных символов и цифр' }, ...prevMessages]);
            setIsSubmittingOrder(false);
            return;
        }
        
        if (phone.replace(/[^0-9]/g, "").length !== 11) {
            setIsPhoneInputError(true);
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Введите корректный номер телефона' }, ...prevMessages]);
            setIsSubmittingOrder(false);
            return;
        }

        if (selectedOrderItems.length === 0) {
            setIsItemsInputError(true);
            setSteckMessages((prevMessages) => [{ isErrorPopup: true, message: 'Выберите хотя бы один элемент каталога для заказа' }, ...prevMessages]);
            setIsSubmittingOrder(false);
            return;
        }
        
        try {
            const order = await createPublicOrder({
                phone,
                fullName: fullName || undefined,
                email: email || undefined,
                address: address || undefined,
                deliveryAddress: deliveryAddress || undefined,
                deliveryDate: deliveryDate || undefined,
                additionalInfo: additionalInfo || undefined,
                comment: comment || undefined,
                items: selectedOrderItems,
            });

            setSteckMessages((prevMessages) => [{
                isErrorPopup: false,
                message: `Заказ №${order.orderId} успешно создан. Мы свяжемся с вами в ближайшее время`,
            }, ...prevMessages]);
            resetForm();
        } catch (error) {
            setSteckMessages((prevMessages) => [{
                isErrorPopup: true,
                message: error instanceof Error ? error.message : 'Невозможно оформить заказ. Повторите попытку позже',
            }, ...prevMessages]);
        } finally {
            setIsSubmittingOrder(false);
        }
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
        setIsNameInputError(false);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleDeliveryAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDeliveryAddress(event.target.value);
    };

    const handleDeliveryDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDeliveryDate(event.target.value);
    };

    const renderCatalogGroup = (title: string, items: CatalogItem[]) => (
        <div className="border border-accent p-4 bg-white">
            <H3>{title}</H3>
            <div className="mt-4 flex flex-col gap-3">
                {items.map((item) => {
                    const isSelected = Boolean(selectedItems[item.catalogItemId]);

                    return (
                        <label
                            key={item.catalogItemId}
                            className={`flex flex-col gap-3 border p-4 transition-colors ${isSelected ? 'border-accent bg-surface' : 'border-[#e7ddd0]'}`}
                        >
                            <div className="flex items-start justify-between gap-4 T:flex-col">
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={(event) => toggleCatalogItem(item.catalogItemId, event.target.checked)}
                                        className="mt-1 h-4 w-4 accent-accent"
                                    />
                                    <div>
                                        <TextMain className="block font-semibold">{item.name}</TextMain>
                                        {item.description ? <TextMain className="block mt-1">{item.description}</TextMain> : null}
                                    </div>
                                </div>
                                <TextMain className="block whitespace-nowrap">{item.price} ₽</TextMain>
                            </div>
                            {isSelected ? (
                                <div className="flex items-center gap-3">
                                    <TextMain className="block whitespace-nowrap">Количество</TextMain>
                                    <input
                                        type="number"
                                        min={1}
                                        value={selectedItems[item.catalogItemId]}
                                        onChange={(event) => changeCatalogQuantity(item.catalogItemId, Number(event.target.value) || 1)}
                                        className="w-[120px] border border-accent px-3 py-2"
                                    />
                                </div>
                            ) : null}
                        </label>
                    );
                })}
            </div>
        </div>
    );

    return (
        <>
            <footer id="contacts" className="pt-[130px] T:pt-[100px] TS:pt-[70px]">
                <section className="px-[12%] L:px-[20px] P:px-[10px]">
                    <div>
                        <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[100ms]">
                            <HeadingOfSection className="text-center">Контакты</HeadingOfSection>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[200ms]">
                            <H2 className="text-center mt-[8px] mb-[16px]">Оформите заказ</H2>
                        </AnimatedElementFade>
                        <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[300ms]" additionalClasses="w-3/4 TS:w-full mx-auto">
                            <Subtitle className="text-center">Выберите позиции из каталога, заполните данные для связи и отправьте заказ прямо с сайта.</Subtitle>
                        </AnimatedElementFade>
                    </div>
                    <div className="mt-[40px] TS:mt-[30px] P:mt-[20px] ">
                        <form action="/" method="POST" onSubmit={sendOrder}>
                            <div className="flex flex-row gap-[30px] T:flex-col T:gap-[15px]">
                                <AnimatedElementFade animateFade="animate-fade-right" threshold={0.6} delay="animate-delay-100" additionalClasses="w-full">
                                    <Input
                                        placeholder="Имя"
                                        type="text"
                                        name="fullName"
                                        maxLength={25}
                                        minLength={2}
                                        additionalClass={`${isNameInputError ? 'border-red-300 hover:border-red-400' : ''}`}
                                        onChange={handleNameChange}
                                        value={fullName}
                                    />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-left" threshold={0.6} delay="animate-delay-100" additionalClasses="w-full">
                                    <InputMask
                                        mask="+7 (999) 999-99-99"
                                        onChange={(event) => { setPhone(event.target.value ?? ''); setIsPhoneInputError(false); }}
                                        value={phone}
                                        placeholder="Телефон*"
                                        name="phone"
                                        className={`w-full bg-white border border-accent hover:border-accentHover hover:bg-[#fffcfa] text-secondary font-normal duration-500 ease-in-out transition-colors placeholder:text-secondary text-[16px] py-[20px] px-[20px] TS:text-[14px] TS:py-[16px] TS:px-[15px] P:text-[16px] P:py-[20px] P:px-[20px] ${isPhoneInputError ? 'border-red-300 hover:border-red-400' : ''}`}
                                    />
                                </AnimatedElementFade>
                            </div>
                            <div className="my-[30px] grid grid-cols-2 gap-[30px] T:grid-cols-1 T:gap-[15px]">
                                <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                    <Input
                                        placeholder="Ваш адрес"
                                        type="text"
                                        name="address"
                                        value={address}
                                        onChange={handleAddressChange}
                                    />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                    <Input
                                        placeholder="Адрес доставки"
                                        type="text"
                                        name="deliveryAddress"
                                        value={deliveryAddress}
                                        onChange={handleDeliveryAddressChange}
                                    />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                    <Input
                                        type="date"
                                        name="deliveryDate"
                                        value={deliveryDate}
                                        onChange={handleDeliveryDateChange}
                                    />
                                </AnimatedElementFade>
                            </div>

                            <div className="my-[30px] grid gap-[20px]">
                                <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                    <div className={`${isItemsInputError ? 'border border-red-300 p-3' : ''}`}>
                                        {isCatalogLoading ? (
                                            <TextMain className="block">Загружаем актуальный каталог...</TextMain>
                                        ) : null}
                                        {catalogError ? (
                                            <div className="flex flex-col gap-4">
                                                <TextMain className="block text-red-600">{catalogError}</TextMain>
                                                <ButtonSubmit type="button" onClick={() => { void onRetryCatalog(); }}>
                                                    Повторить загрузку каталога
                                                </ButtonSubmit>
                                            </div>
                                        ) : null}
                                        {catalog ? (
                                            <div className="grid gap-[20px]">
                                                {catalogGroups.map((group) => renderCatalogGroup(group.label, catalog[group.key]))}
                                            </div>
                                        ) : null}
                                    </div>
                                </AnimatedElementFade>
                            </div>

                            <div className="my-[30px] grid grid-cols-2 gap-[30px] T:grid-cols-1 T:gap-[15px]">
                                <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                    <Textarea
                                        placeholder="Дополнительная информация о вас"
                                        name="additionalInfo"
                                        onChange={(event) => { setAdditionalInfo(event.target.value); }}
                                        value={additionalInfo}
                                        maxLength={5000}
                                    />
                                </AnimatedElementFade>
                                <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                    <Textarea
                                        placeholder="Комментарий к заказу"
                                        name="comment"
                                        onChange={(event) => { setComment(event.target.value); }}
                                        value={comment}
                                        maxLength={5000}
                                    />
                                </AnimatedElementFade>
                            </div>
                            <AnimatedElementFade animateFade="animate-fade-up" threshold={0.5} delay="animate-delay-100">
                                <ButtonSubmit type="submit" disabled={isSubmittingOrder || isCatalogLoading || Boolean(catalogError)}>
                                    {isSubmittingOrder ? 'Оформляем заказ...' : 'Оформить заказ'}
                                </ButtonSubmit>
                            </AnimatedElementFade>
                        </form>
                    </div>
                </section>
                <section className="mt-[130px] T:mt-[100px] TS:mt-[70px]">
                    <AnimatedElementFade animateFade="animate-fade" threshold={0.4} delay="animate-delay-300" additionalClasses="w-full max-h-[600px]">
                        <YandexMap />
                    </AnimatedElementFade>
                    <div className="flex flex-row items-start justify-center L:flex-col L:items-center gap-[80px] L:gap-y-[40px] py-[130px] T:py-[100px] TS:py-[70px] text-nowrap">
                        <div className="flex justify-between flex-row P:flex-col gap-[80px] L:gap-[70px] TS:gap-[30px] ">
                            <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[100ms]" additionalClasses="flex flex-col gap-[14px] L:w-[200px] -translate-y-2 L:translate-x-0">
                                <Logo></Logo>
                                <TextFooter fontWeight="font-semibold">Москва<br />
                                    Ленинский проспект, 79</TextFooter>
                            </AnimatedElementFade>
                            <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[200ms]" additionalClasses="flex flex-col gap-[30px] L:w-[200px]">
                                <H3>Контакты</H3>
                                <div>
                                    <div className="flex items-center ">
                                        <div className="inline-block w-[20px] mr-2">
                                            <img src="/assets/svg/smartphone.svg" alt="smartphone" className="w-auto h-[19px]" />
                                        </div>
                                        <TextFooter>+7 (915) 331-24-31</TextFooter>
                                    </div>
                                    <div className="flex items-center mt-[10px]">
                                        <div className="inline-block w-[20px] mr-2">
                                            <img src="/assets/svg/gmail.svg" alt="gmail" className="w-[19px] h-auto" />
                                        </div>
                                        <TextFooter>viotort@gmail.com</TextFooter>
                                    </div>
                                </div>
                            </AnimatedElementFade>
                        </div>
                        <div className="flex justify-between flex-row P:flex-col gap-[80px] L:gap-[70px] TS:gap-[30px] ">
                            <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[300ms]" additionalClasses="flex flex-col gap-[30px] L:w-[200px]">
                                <H3>График работы</H3>
                                <div>
                                    <div>
                                        <TextFooter>Пн-Пт с 9 до 20</TextFooter>
                                    </div>
                                    <div className="mt-[10px]">
                                        <TextFooter>Сб-Вс с 10 до 20</TextFooter>
                                    </div>
                                </div>
                            </AnimatedElementFade>
                            <AnimatedElementFade animateFade="animate-fade-down" delay="animate-delay-[400ms]" additionalClasses="flex flex-col gap-[30px] L:w-[200px]">
                                <H3>Полезные ссылки</H3>
                                <div>
                                    <div>
                                        <TextFooter>Контакты для связи:</TextFooter>
                                    </div>
                                    <div className="mt-[20px]">
                                        <NetworkLinks />
                                    </div>
                                </div>
                            </AnimatedElementFade>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;
