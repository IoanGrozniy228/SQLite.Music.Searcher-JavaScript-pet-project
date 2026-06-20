# 🎵 Music Searcher (пока в процессе разработки (половина функций не робит xd🐒))

Поисковик музыки с возможностью искать песни по автору, альбому или названию. Выдаёт сразу ссылки на YouTube и обложки альбомов.

<img align="center" width="1901" height="988" alt="image" src="https://github.com/user-attachments/assets/60af93c7-af8b-4178-8b45-880b297e7878" />
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
[Node.js](https://nodejs.org) (версия LTS) — скачать и установить как обычную программу

# Клонировать репозиторий
```markdown
git clone https://github.com/IoanGrozniy228/SQLite.Music.Searcher-JavaScript-pet-project.git
```
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

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/music/songs/:name` | Поиск песни по названию |
| GET | `/music/albums/:name` | Поиск альбома по названию |
| GET | `/music/authors/:name` | Поиск автора по имени |
| GET | `/music/authorAlbums/:name` | Все альбомы автора |
| GET | `/music/albumSongs/:name` | Все песни альбома |
| GET | `/music/authorSongs/:name` | Все песни автора |

## 🎯 Планы

- [ ] Добавить регистрацию и избранное
- [ ] Загрузка своих песен
- [ ] Поиск по жанру
- [ ] Ютуб-плеер на сайте

