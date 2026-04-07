'use client';

import H2 from '@/shared/ui/text/H2';
import HeadingOfSection from '@/shared/ui/text/HeadingOfSection';
import Subtitle from '@/shared/ui/text/Subtitle';
import TextMain from '@/shared/ui/text/TextMain';
import type { AuthLoginResponse } from '@/shared/api/generated';

type Props = {
  staff: AuthLoginResponse['staff'] | null;
};

export default function AdminAuthSummary({ staff }: Props) {
  return (
    <main className="relative mb-64">
      <section className="pt-[130px] T:pt-[100px] TS:pt-[70px] px-[12%] L:px-[20px] P:px-[10px]">
        <HeadingOfSection className="text-center">Панель администратора</HeadingOfSection>
        <H2 className="text-center mt-[8px] mb-[16px]">Авторизация подключена</H2>
        <div className="w-3/4 TS:w-full mx-auto">
          <Subtitle className="text-center">
            Вход уже работает через актуальную ручку `POST /api/auth/login` и сгенерированный OpenAPI-клиент.
          </Subtitle>
        </div>
        <div className="mt-[40px] p-8 bg-surface border border-accent">
          <TextMain className="block">
            Текущий пользователь: {staff ? `${staff.fullName} (${staff.login})` : 'не определён'}
          </TextMain>
          <TextMain className="block mt-[12px]">
            Следующий шаг: перевести старые запросы админ-панели на новые эндпоинты `/api/users`, `/api/staffs`, `/api/orders`.
          </TextMain>
        </div>
      </section>
    </main>
  );
}
