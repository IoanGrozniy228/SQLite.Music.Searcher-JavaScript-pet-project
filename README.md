# 🎵 Music Searcher (пока в процессе разработки🐒)

Поисковик музыки с возможностью искать песни по автору, альбому или названию. Выдаёт сразу ссылки на YouTube и обложки альбомов.

<img align="center" width="1897" height="982" alt="Снимок экрана 2026-06-21 203043" src="https://github.com/user-attachments/assets/466765f5-844c-44aa-8063-aa3d93e6d4e6" />
<div align="center"> Пример страницы </div>


## 🚀 Возможности

- 🔍 Поиск по автору, альбому или названию песни
- 🖼️ Отображение обложек альбомов
- ▶️ Прямые ссылки на YouTube
- ⚡ Быстрый поиск без перезагрузки страницы

## 🛠️ Технологии

| Категория | Стек |
|------|------|
| **Бэкенд** | Node.js, Express |
| **База данных** | SQLite, Sequelize ORM |
| **Фронтенд** | EJS, CSS, Vanilla JS |
| **Архитектура** | MVC (Models, Views, Controllers) + Services |

## 📂 Структура проекта
```markdown
SQLite.Music.Searcher/
├── server.js              # Точка входа
├── db.js                  # Подключение к БД
├── models/                # Модели Sequelize
│   ├── Song.js
│   ├── Album.js
│   └── Author.js
├── services/              # Бизнес-логика
│   └── music.service.js
├── controllers/           # Обработчики запросов
│   └── music.controller.js
├── routes/                # Маршруты
│   └── music.routes.js
├── views/                 # EJS шаблоны
│   └── index.ejs
└── public/                # Статика
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```
## ⚙️ Установка и запуск
### Что нужно установить заранее
- [Node.js](https://nodejs.org) (версия LTS) — скачать и установить как обычную программу
- [Git](https://git-scm.com) — опционально, чтобы легче скачать проект по инструкции ниже

# Клонировать репозиторий
```markdown
git clone https://github.com/IoanGrozniy228/SQLite.Music.Searcher-JavaScript-pet-project.git
```
или просто скачать ZIP с GitHub (Code → Download ZIP) и распаковать
# Перейти в папку
```markdown
cd SQLite.Music.Searcher-JavaScript-pet-project
```
# Установить зависимости
```markdown
npm install
```
# Запустить
```markdown
npm run dev
```
Открыть в браузере: `http://localhost:5000`

## 🗄️ База данных

SQLite, файл `music.db`. Таблицы:

- **Authors** — авторы (имя, год начала карьеры)
- **Albums** — альбомы (название, обложка, количество песен)
- **Songs** — песни (название, жанр, YouTube URL, длительность)

(Пока в бд есть только Michael Jackson, Queen, Guns N' Roses, Travis Scott, но будут добавлены ещё + возможность добавить через POST)
## 📡 API

### Музыка

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/` | Главная страница |
| GET | `/music/songs/:name` | Поиск песни по названию |
| GET | `/music/albums/:name` | Поиск альбома по названию |
| GET | `/music/authors/:name` | Поиск автора по имени |
| GET | `/music/authorAlbums/:name` | Все альбомы автора |
| GET | `/music/albumSongs/:name` | Все песни альбома |
| GET | `/music/authorSongs/:name` | Все песни автора |

### Пользователи

| Метод | URL | Описание |
|-------|-----|----------|
| POST | `/user/reg` | Регистрация |
| POST | `/user/log` | Вход |
| PUT | `/user/changeUserInfo` | Сменить логин и/или пароль |
| PATCH | `/user/changeUserPassword` | Сменить только пароль |
| DELETE | `/user/del` | Удалить аккаунт |

### Безопасность

- Rate limiting: 30 запросов / 1 минута на все маршруты
- Rate limiting: 5 попыток / 1 минута на логин и регистрацию
- Пароли хешируются через bcrypt

## 🎯 Планы

- [ ] Добавить регистрацию и избранное
- [ ] Загрузка своих песен
- [ ] Поиск по жанру
- [ ] Ютуб-плеер на сайте

