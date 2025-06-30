# Codes Commanders — Тестовое задание

Тестовое задание для стажировки Frontend в Codes Commanders.

## Описание

Приложение разработано на:

- Vite + React 19
- TypeScript
- Redux Toolkit + RTK Query
- React Router DOM
- react-i18next
- CSS Modules
- Docker

## Функционал

- Загрузка постов с публичного API `https://jsonplaceholder.typicode.com/posts`
- Авторизация по username через `https://jsonplaceholder.typicode.com/users`
- Сохранение состояния пользователя в глобальном хранилище
- Возможность входа и выхода (Sign In / Log Out)
- Уведомления об ошибках через `Toast`
- Переключение языка
- Страница поста с комментариями, доступна только авторизованным пользователям

## Структура проекта

```plaintext
├── public/               # Статичные файлы
├── src/
│   ├── components/       # Общие компоненты (Toast и др.)
│   ├── features/         # Redux slices и API
│   ├── pages/            # Страницы приложения
│   ├── store.ts          # Конфигурация Redux store
│   ├── App.tsx           # Корневой компонент
│   ├── main.tsx          # Точка входа
├── Dockerfile
├── .dockerignore
├── package.json
├── README.md
```

## Быстрый старт (локально)

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Запуск через Docker

```bash
docker build -t codescommanders-test .
docker run -p 3000:3000 codescommanders-test
http://localhost:3000
```

## Демо

Развернутое приложение:
[codescommanders.panchenko.work](https://codescommanders.panchenko.work/)