# React-flower

Интернет магазин цветов

[Демонстрация проекта в видео формате](https://www.youtube.com/watch?v=_ACQQ8AJ1qQ)

# Функционал

- Регистрация и авторизация
- Админ панель,позволяющая создавать товары и добавлять их в каталог,удаление каталога товаров
- Добавление товара в коризну,удаление,изменение количества
- Возможность оформления заказа
- Отображение всех заказов и их стоимости в профиле
- Адаптив до 320px

# Используемый стек 

- Backend 
    - Node.js
    - MongoDB
    - JavaScript
- Frontend 
    - React.js
    - TypeScript
    - Axios
    - Redax
    - SCSS

# Как запусить проект
Для запуска проекта понадобится база данных MongoDB(MongoDB compass),затем нужно прописать следующие команды:

1. В файле `.env` (файл находится в папке backend) нужно поменять путь в `MONGO_URI = ваш путь`
2. `npm run start` - инициализирует файлы для фронтенда
3. `npm run server` - инициализирует файлы для бекенда