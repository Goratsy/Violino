'use client';

import { useRouter } from 'next/navigation';
import { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

import {
  CatalogItemType,
  CatalogService,
  OrdersService,
  OrderStatus,
  StaffRole,
  StaffsService,
  UsersService,
  type AuthLoginResponse,
  type CreateCatalogItemRequest,
  type CreateStaffRequest,
  type UpdateCatalogItemRequest,
  type UpdateOrderRequest,
  type UpdateOrderStatusRequest,
  type UpdateStaffRequest,
} from '@/shared/api/generated';
import { clearSession } from '@/features/auth/lib/session';
import { useAuth } from '@/shared/lib/contexts/auth-context';
import ButtonSubmit from '@/shared/ui/button/ButtonSubmit';
import H2 from '@/shared/ui/text/H2';
import H3 from '@/shared/ui/text/H3';
import HeadingOfSection from '@/shared/ui/text/HeadingOfSection';
import Subtitle from '@/shared/ui/text/Subtitle';
import TextMain from '@/shared/ui/text/TextMain';

type Props = {
  staff: AuthLoginResponse['staff'];
};

type RequestState = {
  loading: boolean;
  error: string | null;
  data: unknown;
};

const defaultRequestState: RequestState = {
  loading: false,
  error: null,
  data: null,
};

const parseJson = <T,>(value: string): T => JSON.parse(value) as T;

const stringifyValue = (value: unknown) => {
  if (value === null || value === undefined) {
    return '—';
  }

  if (typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }

  return String(value);
};

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  return 'Не удалось выполнить запрос';
};

function ResultView({ data }: { data: unknown }) {
  if (data === null || data === undefined) {
    return null;
  }

  if (Array.isArray(data)) {
    if (data.length === 0) {
      return <TextMain className="block mt-4">Пустой результат</TextMain>;
    }

    if (typeof data[0] === 'object' && data[0] !== null) {
      const columns: string[] = Array.from(
        data.reduce((keys, item) => {
          Object.keys(item as Record<string, unknown>).forEach((key) => keys.add(key));
          return keys;
        }, new Set<string>()),
      );

      return (
        <div className="mt-4 overflow-x-scroll">
          <table className="w-max border-collapse border border-accent text-left">
            <thead>
              <tr className="bg-surface">
                {columns.map((column) => (
                  <th key={column} className="border border-accent px-3 py-2 align-top">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column} className="border border-accent px-3 py-2 align-top whitespace-pre-wrap">
                      {stringifyValue((row as Record<string, unknown>)[column])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <pre className="mt-4 whitespace-pre-wrap break-words bg-surface border border-accent p-4 text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    );
  }

  if (typeof data === 'object') {
    const objectEntries = Object.entries(data as Record<string, unknown>);

    return (
      <div className="mt-4 overflow-x-auto">
        <table className="w-max min-w-full border-collapse border border-accent text-left">
          <tbody>
            {objectEntries.map(([key, value]) => (
              <tr key={key}>
                <th className="w-52 border border-accent px-3 py-2 align-top bg-surface">{key}</th>
                <td className="border border-accent px-3 py-2 align-top whitespace-pre-wrap">
                  {stringifyValue(value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <pre className="mt-4 whitespace-pre-wrap break-words bg-surface border border-accent p-4 text-sm">
      {stringifyValue(data)}
    </pre>
  );
}

function Block({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="w-full border border-accent p-5 bg-white overflow-x-auto">
      <H3>{title}</H3>
      <TextMain className="block mt-2">{description}</TextMain>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function runStateSetter(
  setState: Dispatch<SetStateAction<RequestState>>,
  handler: () => Promise<unknown>,
) {
  return async () => {
    setState({ ...defaultRequestState, loading: true });

    try {
      const data = await handler();
      setState({ loading: false, error: null, data });
    } catch (error) {
      setState({ loading: false, error: getErrorMessage(error), data: null });
    }
  };
}

function SessionOverview({ staff }: Props) {
  const router = useRouter();
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    clearSession();
    setIsAuthenticated(false);
    router.replace('/admin/login');
  };

  return (
    <section id="overview" className="border border-accent p-6 bg-surface">
      <HeadingOfSection className="text-center">Панель сотрудников</HeadingOfSection>
      <H2 className="text-center mt-[8px] mb-[16px]">Добро пожаловать, {staff.role}</H2>
      <div className="w-3/4 TS:w-full mx-auto">
        <Subtitle className="text-center">
          Данные загружаются только по кнопкам внутри блоков. Это снижает количество запросов при открытии `/admin`.
        </Subtitle>
      </div>
      <div className="mt-6 grid gap-3">
        <TextMain className="block">Сотрудник: {staff.fullName}</TextMain>
        <TextMain className="block">Логин: {staff.login}</TextMain>
        <TextMain className="block">Роль: {staff.role}</TextMain>
      </div>
      <div className="mt-6 max-w-[260px]">
        <ButtonSubmit type="button" onClick={handleLogout}>
          Выйти из аккаунта
        </ButtonSubmit>
      </div>
    </section>
  );
}

function StaffListBlock() {
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () => StaffsService.getApiStaffs());

  return (
    <Block title="Сотрудники: список" description="GET /api/staffs">
      <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
        {state.loading ? 'Загрузка...' : 'Получить список сотрудников'}
      </ButtonSubmit>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function CreateStaffBlock() {
  const [payload, setPayload] = useState(
    JSON.stringify(
      {
        fullName: 'Новый сотрудник',
        login: 'new_staff',
        password: 'Admin123!',
        role: StaffRole.MANAGER,
      } satisfies CreateStaffRequest,
      null,
      2,
    ),
  );
  const [state, setState] = useState<RequestState>(defaultRequestState);

  const handleClick = runStateSetter(setState, () =>
    StaffsService.postApiStaffs({ requestBody: parseJson<CreateStaffRequest>(payload) }),
  );

  return (
    <Block title="Сотрудники: создание" description="POST /api/staffs">
      <textarea
        className="w-full min-h-[180px] border border-accent p-3 font-mono text-sm"
        value={payload}
        onChange={(event) => setPayload(event.target.value)}
      />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Отправка...' : 'Создать сотрудника'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function UpdateStaffBlock() {
  const [staffId, setStaffId] = useState('1');
  const [payload, setPayload] = useState(
    JSON.stringify(
      {
        fullName: 'Обновлённое имя',
        role: StaffRole.COURIER,
      } satisfies UpdateStaffRequest,
      null,
      2,
    ),
  );
  const [state, setState] = useState<RequestState>(defaultRequestState);

  const handleClick = runStateSetter(setState, () =>
    StaffsService.patchApiStaffs({
      id: Number(staffId),
      requestBody: parseJson<UpdateStaffRequest>(payload),
    }),
  );

  return (
    <Block title="Сотрудники: редактирование" description="PATCH /api/staffs/:id">
      <input
        className="w-full border border-accent p-3"
        value={staffId}
        onChange={(event) => setStaffId(event.target.value)}
        placeholder="ID сотрудника"
      />
      <textarea
        className="mt-3 w-full min-h-[180px] border border-accent p-3 font-mono text-sm"
        value={payload}
        onChange={(event) => setPayload(event.target.value)}
      />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Отправка...' : 'Обновить сотрудника'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function DeleteStaffBlock() {
  const [staffId, setStaffId] = useState('1');
  const [state, setState] = useState<RequestState>(defaultRequestState);

  const handleClick = runStateSetter(setState, async () => {
    await StaffsService.deleteApiStaffs({ id: Number(staffId) });
    return { ok: true, deletedStaffId: Number(staffId) };
  });

  return (
    <Block title="Сотрудники: удаление" description="DELETE /api/staffs/:id">
      <input
        className="w-full border border-accent p-3"
        value={staffId}
        onChange={(event) => setStaffId(event.target.value)}
        placeholder="ID сотрудника"
      />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Удаление...' : 'Удалить сотрудника'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function UsersListBlock() {
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState('20');
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () =>
    UsersService.getApiUsers({
      search: search || undefined,
      limit: Number(limit) || 20,
      offset: 0,
    }),
  );

  return (
    <Block title="Клиенты: список" description="GET /api/users">
      <div className="grid gap-3">
        <input className="w-full border border-accent p-3" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Поиск по имени или телефону" />
        <input className="w-full border border-accent p-3" value={limit} onChange={(event) => setLimit(event.target.value)} placeholder="Лимит" />
      </div>
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Загрузка...' : 'Получить список клиентов'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function UserByIdBlock() {
  const [userId, setUserId] = useState('1');
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () => UsersService.getApiUsers1({ id: Number(userId) }));

  return (
    <Block title="Клиенты: просмотр" description="GET /api/users/:id">
      <input className="w-full border border-accent p-3" value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="ID клиента" />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Загрузка...' : 'Получить клиента'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function UserByPhoneBlock() {
  const [phone, setPhone] = useState('+79153312431');
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () => UsersService.getApiUsersByPhone({ phone }));

  return (
    <Block title="Клиенты: поиск по телефону" description="GET /api/users/by-phone/:phone">
      <input className="w-full border border-accent p-3" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Телефон" />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Поиск...' : 'Найти клиента'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function CatalogListBlock() {
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () => CatalogService.getApiCatalog());

  return (
    <Block title="Каталог: список" description="GET /api/catalog">
      <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
        {state.loading ? 'Загрузка...' : 'Получить каталог'}
      </ButtonSubmit>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function CreateCatalogBlock() {
  const [payload, setPayload] = useState(
    JSON.stringify(
      {
        type: CatalogItemType.FILLING,
        name: 'Новая начинка',
        description: 'Тестовый элемент каталога',
        price: 2500,
        imageUrl: null,
        isActive: true,
      } satisfies CreateCatalogItemRequest,
      null,
      2,
    ),
  );
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () =>
    CatalogService.postApiCatalog({ requestBody: parseJson<CreateCatalogItemRequest>(payload) }),
  );

  return (
    <Block title="Каталог: создание" description="POST /api/catalog">
      <textarea className="w-full min-h-[180px] border border-accent p-3 font-mono text-sm" value={payload} onChange={(event) => setPayload(event.target.value)} />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Отправка...' : 'Создать элемент каталога'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function UpdateCatalogBlock() {
  const [catalogId, setCatalogId] = useState('1');
  const [payload, setPayload] = useState(
    JSON.stringify(
      {
        name: 'Обновлённое название',
        price: 3100,
        isActive: true,
      } satisfies UpdateCatalogItemRequest,
      null,
      2,
    ),
  );
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () =>
    CatalogService.patchApiCatalog({
      id: Number(catalogId),
      requestBody: parseJson<UpdateCatalogItemRequest>(payload),
    }),
  );

  return (
    <Block title="Каталог: редактирование" description="PATCH /api/catalog/:id">
      <input className="w-full border border-accent p-3" value={catalogId} onChange={(event) => setCatalogId(event.target.value)} placeholder="ID элемента каталога" />
      <textarea className="mt-3 w-full min-h-[180px] border border-accent p-3 font-mono text-sm" value={payload} onChange={(event) => setPayload(event.target.value)} />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Отправка...' : 'Обновить элемент каталога'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function DeleteCatalogBlock() {
  const [catalogId, setCatalogId] = useState('1');
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, async () => {
    await CatalogService.deleteApiCatalog({ id: Number(catalogId) });
    return { ok: true, deletedCatalogItemId: Number(catalogId) };
  });

  return (
    <Block title="Каталог: удаление" description="DELETE /api/catalog/:id">
      <input className="w-full border border-accent p-3" value={catalogId} onChange={(event) => setCatalogId(event.target.value)} placeholder="ID элемента каталога" />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Удаление...' : 'Деактивировать элемент каталога'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function OrdersListBlock() {
  const [status, setStatus] = useState<OrderStatus | ''>('');
  const [userId, setUserId] = useState('');
  const [staffId, setStaffId] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () =>
    OrdersService.getApiOrders({
      status: status || undefined,
      userId: userId ? Number(userId) : undefined,
      staffId: staffId ? Number(staffId) : undefined,
      phone: phone || undefined,
      limit: 20,
      offset: 0,
    }),
  );

  return (
    <Block title="Заказы: список" description="GET /api/orders">
      <div className="grid gap-3">
        <input className="w-full border border-accent p-3" value={status} onChange={(event) => setStatus(event.target.value as OrderStatus | '')} placeholder="Статус: new / confirmed / in_progress ..." />
        <input className="w-full border border-accent p-3" value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="ID клиента" />
        <input className="w-full border border-accent p-3" value={staffId} onChange={(event) => setStaffId(event.target.value)} placeholder="ID сотрудника" />
        <input className="w-full border border-accent p-3" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Телефон" />
      </div>
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Загрузка...' : 'Получить список заказов'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function OrderByIdBlock() {
  const [orderId, setOrderId] = useState('1');
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () => OrdersService.getApiOrders1({ id: Number(orderId) }));

  return (
    <Block title="Заказы: просмотр" description="GET /api/orders/:id">
      <input className="w-full border border-accent p-3" value={orderId} onChange={(event) => setOrderId(event.target.value)} placeholder="ID заказа" />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Загрузка...' : 'Получить заказ'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function UpdateOrderBlock() {
  const [orderId, setOrderId] = useState('1');
  const [payload, setPayload] = useState(
    JSON.stringify(
      {
        deliveryAddress: 'Москва, Ленинский проспект, 79',
        comment: 'Обновление заказа из панели',
      } satisfies UpdateOrderRequest,
      null,
      2,
    ),
  );
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () =>
    OrdersService.patchApiOrders({
      id: Number(orderId),
      requestBody: parseJson<UpdateOrderRequest>(payload),
    }),
  );

  return (
    <Block title="Заказы: изменение" description="PATCH /api/orders/:id">
      <input className="w-full border border-accent p-3" value={orderId} onChange={(event) => setOrderId(event.target.value)} placeholder="ID заказа" />
      <textarea className="mt-3 w-full min-h-[180px] border border-accent p-3 font-mono text-sm" value={payload} onChange={(event) => setPayload(event.target.value)} />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Отправка...' : 'Изменить заказ'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function UpdateOrderStatusBlock() {
  const [orderId, setOrderId] = useState('1');
  const [payload, setPayload] = useState(
    JSON.stringify(
      {
        status: OrderStatus.DELIVERING,
        location: 'Москва',
        note: 'Статус обновлён вручную',
      } satisfies UpdateOrderStatusRequest,
      null,
      2,
    ),
  );
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () =>
    OrdersService.postApiOrdersStatus({
      id: Number(orderId),
      requestBody: parseJson<UpdateOrderStatusRequest>(payload),
    }),
  );

  return (
    <Block title="Статусы: изменение" description="POST /api/orders/:id/status">
      <input className="w-full border border-accent p-3" value={orderId} onChange={(event) => setOrderId(event.target.value)} placeholder="ID заказа" />
      <textarea className="mt-3 w-full min-h-[180px] border border-accent p-3 font-mono text-sm" value={payload} onChange={(event) => setPayload(event.target.value)} />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Отправка...' : 'Изменить статус'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function OrderHistoryBlock() {
  const [orderId, setOrderId] = useState('1');
  const [state, setState] = useState<RequestState>(defaultRequestState);
  const handleClick = runStateSetter(setState, () => OrdersService.getApiOrdersHistory({ id: Number(orderId) }));

  return (
    <Block title="Статусы: история" description="GET /api/orders/:id/history">
      <input className="w-full border border-accent p-3" value={orderId} onChange={(event) => setOrderId(event.target.value)} placeholder="ID заказа" />
      <div className="mt-4">
        <ButtonSubmit type="button" onClick={handleClick} disabled={state.loading}>
          {state.loading ? 'Загрузка...' : 'Получить историю статусов'}
        </ButtonSubmit>
      </div>
      {state.error ? <TextMain className="block mt-4 text-red-600">{state.error}</TextMain> : null}
      <ResultView data={state.data} />
    </Block>
  );
}

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="pt-[100px]">
      <HeadingOfSection>{title}</HeadingOfSection>
      <TextMain className="block mt-2">{description}</TextMain>
      <div className="mt-6 grid gap-6">{children}</div>
    </section>
  );
}

export default function RoleDashboard({ staff }: Props) {
  const isAdmin = staff.role === 'admin';
  const isManagerOrCourier = staff.role === 'manager' || staff.role === 'courier';

  return (
    <main className="relative mb-64">
      <section className="pt-[130px] T:pt-[100px] TS:pt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
        <SessionOverview staff={staff} />

        {isAdmin ? (
          <>
            <Section id="staffs" title="Сотрудники" description="Требования администратора: получение списка, создание, редактирование и удаление сотрудников.">
              <StaffListBlock />
              <CreateStaffBlock />
              <UpdateStaffBlock />
              <DeleteStaffBlock />
            </Section>

            <Section id="users" title="Клиенты" description="Требования администратора: список клиентов, просмотр клиента и поиск по телефону.">
              <UsersListBlock />
              <UserByIdBlock />
              <UserByPhoneBlock />
            </Section>

            <Section id="catalog" title="Каталог" description="Требования администратора: список, создание, редактирование и деактивация элементов каталога.">
              <CatalogListBlock />
              <CreateCatalogBlock />
              <UpdateCatalogBlock />
              <DeleteCatalogBlock />
            </Section>

            <Section id="orders" title="Заказы и статусы" description="Требования администратора: список заказов, просмотр заказа, изменение заказа, изменение статуса и просмотр истории статусов.">
              <OrdersListBlock />
              <OrderByIdBlock />
              <UpdateOrderBlock />
              <UpdateOrderStatusBlock />
              <OrderHistoryBlock />
            </Section>
          </>
        ) : null}

        {isManagerOrCourier ? (
          <>
            <Section id="orders" title="Заказы" description="Требования сотрудника: список заказов, детали заказа, изменение статуса и история статусов.">
              <OrdersListBlock />
              <OrderByIdBlock />
              <UpdateOrderStatusBlock />
              <OrderHistoryBlock />
            </Section>

            <Section id="users" title="Клиенты" description="Требования сотрудника: просмотр данных клиента без редактирования.">
              <UserByIdBlock />
            </Section>
          </>
        ) : null}
      </section>
    </main>
  );
}
