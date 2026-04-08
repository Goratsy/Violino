# Violino Project

`Violino-project` — это фронтенд-часть системы Violino. Приложение отвечает за публичный сайт кондитерской и административный интерфейс для сотрудников.

Проект написан на `Next.js` и `React`, использует `TypeScript`, `Tailwind CSS` и клиент, сгенерированный из backend `OpenAPI`.

## Что это за приложение

Во фронтенде есть две основные зоны:

1. Публичный сайт
   Он нужен клиентам кондитерской для просмотра информации, выбора вариантов оформления и отправки заказа.

2. Административная панель
   Она нужна сотрудникам с ролями `admin`, `manager`, `courier` для работы с заказами и внутренними данными через backend API.

## Основные технологии

- `Next.js 16`
- `React 18`
- `TypeScript`
- `Tailwind CSS`
- `Primereact InputMask`
- `Embla Carousel`
- `Yandex Maps`
- `openapi-typescript-codegen` для генерации typed SDK из backend `OpenAPI`

## Какие страницы есть

### Публичные страницы

- `/`
  Главная страница сайта.
  Содержит:
  - hero-блок
  - блок о компании
  - преимущества
  - блок с примерами оформления
  - форму оформления заказа
  - карту и контакты

### Административные страницы

- `/admin/login`
  Страница входа для сотрудников.

- `/admin`
  Панель сотрудника.
  Отображение зависит от роли:
  - `admin` видит блоки для сотрудников, клиентов, каталога, заказов и статусов
  - `manager` и `courier` видят ограниченный набор блоков для заказов и просмотра данных клиента

Важно: данные в админке не запрашиваются автоматически при открытии страницы. Для большинства действий используются кнопки, которые запускают конкретный запрос вручную.

## Откуда берутся данные

Фронтенд работает с backend-приложением `Violino-server`.

Основные интеграции:

- публичный каталог и создание заказа идут через:
  - `GET /api/public/catalog`
  - `POST /api/public/orders`

- авторизация сотрудников и админка работают через:
  - `POST /api/auth/login`
  - `GET /api/users`
  - `GET /api/staffs`
  - `GET /api/orders`
  - и другие защищённые ручки

SDK для этих запросов генерируется из backend `OpenAPI`-схемы.

## Запуск проекта

```bash
pnpm install
pnpm generate:api
pnpm dev
```

По умолчанию приложение будет доступно по адресу:

```bash
http://localhost:3000
```

## Полезные команды

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm generate:api
```

## Переменные окружения

Создайте `.env` в корне `Violino-project`, если нужно переопределить настройки:

```bash
NEXT_PUBLIC_SERVER_URL=http://localhost:4000
NEXT_PUBLIC_YANDEX_MAP_API=your_yandex_api_key
```

Описание:

- `NEXT_PUBLIC_SERVER_URL`
  Базовый URL backend API.

- `NEXT_PUBLIC_YANDEX_MAP_API`
  API-ключ для карты Яндекса.

## Архитектура фронтенда

Проект организован в стиле `FSD`.

```text
src/
  app/        # роуты Next.js, layout, providers
  entities/   # базовые бизнес-сущности и типы
  features/   # пользовательские сценарии
  shared/     # общие ui-компоненты, api, utils, config
  views/      # композиции экранов
  widgets/    # крупные секции страниц
public/assets # изображения, svg, mp3 и другие публичные ассеты
```

Ключевые директории:

- `src/app`
  Точки входа страниц Next.js.

- `src/views`
  Экранные композиции вроде `LandingPage` и `AdminDashboardPage`.

- `src/widgets`
  Большие блоки интерфейса: header, footer, секции лендинга, блоки админки.

- `src/features`
  Сценарии вроде авторизации, role-based admin blocks, заказа клиента.

- `src/shared/api`
  Интеграция с backend, generated SDK и API-конфиг.

## Основные файлы

- `src/app/page.tsx`
  Главная страница сайта.

- `src/app/admin/login/page.tsx`
  Страница входа в админку.

- `src/app/admin/page.tsx`
  Страница панели сотрудника.

- `src/views/home/LandingPage.tsx`
  Композиция главной страницы.

- `src/views/admin/AdminDashboardPage.tsx`
  Композиция админки.

- `src/shared/api/generated`
  Сгенерированный SDK по backend `OpenAPI`.

- `scripts/generate-api-client.mjs`
  Скрипт генерации API-клиента.

## Что важно знать при разработке

- Фронт зависит от актуального `OpenAPI` backend-сервера.
- После изменения backend API желательно заново запускать:

```bash
pnpm generate:api
```

- Админка уже разделена по ролям.
- Публичная форма заказа использует реальный каталог с сервера.

## Связанные проекты

- backend: `Backend/Violino-server`
- документация требований: `Docs/функциональные_требования.txt`
