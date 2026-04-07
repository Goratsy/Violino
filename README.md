# Violino

Violino — фронтенд сайта и административной панели для кондитерской в Москве. Проект переведён с `React + Vite` на `Next.js` и разложен по слоям в стиле `FSD`.

## Технологии
- `Next.js`
- `React`
- `TypeScript`
- `Tailwind CSS`
- `Yandex Maps API`

## Запуск

```bash
pnpm install
pnpm generate:api
pnpm dev
```

По умолчанию приложение будет доступно на `http://localhost:3000`.

## Переменные окружения

Создайте `.env` при необходимости:

```bash
NEXT_PUBLIC_SERVER_URL=http://localhost:4000
NEXT_PUBLIC_YANDEX_MAP_API=your_yandex_api_key
```

## Архитектура

Проект организован так:

```text
src/
  app/        # роуты Next.js, layout, providers
  entities/   # бизнес-сущности и типы
  features/   # пользовательские сценарии
  shared/     # api, ui-kit, utils, config
  views/      # композиции экранов
  widgets/    # крупные секции страниц
public/assets # изображения, svg, mp3
```

`views` используются как слой экранных композиций вместо классического `pages`, потому что в `Next.js` директория `app/` уже отвечает за маршрутизацию.
