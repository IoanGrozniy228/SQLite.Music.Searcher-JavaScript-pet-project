# 🎵 Music Searcher

Поисковик музыки с возможностью искать песни по автору, альбому или названию. Выдаёт сразу ссылки на YouTube и обложки альбомов.

<img align="center" width="1902" height="989" alt="Снимок экрана 2026-06-21 021205" src="https://github.com/user-attachments/assets/f80a3c7a-360b-442b-9080-27d63c2e4a19" />
<div align="center"> Пример страницы </div>


## 🚀 Возможности

- 🔍 Поиск по автору, альбому или названию песни
- 🖼️ Отображение обложек альбомов
- ▶️ Прямые ссылки на YouTube
- 🎨 Тёмный современный дизайн
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

# Клонировать репозиторий
git clone https://github.com/твой-юзернейм/music-searcher.git

# Перейти в папку
cd music-searcher

# Установить зависимости
npm install

# Запустить
npm dev run

Открыть в браузере: `http://localhost:5000`

## 🗄️ База данных

SQLite, файл `music.db`. Таблицы:

- **Authors** — авторы (имя, год начала карьеры)
- **Albums** — альбомы (название, обложка, количество песен)
- **Songs** — песни (название, жанр, YouTube URL, длительность)

## 📡 API

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/music/authorSongs/:name` | Песни автора |
| GET | `/music/albumSongs/:name` | Песни альбома |
| GET | `/music/songs/:name` | Поиск песни по названию |
| GET | `/music/play/:id` | Редирект на YouTube |

## 🎯 Планы

- [ ] Добавить регистрацию и избранное
- [ ] Загрузка своих песен
- [ ] Поиск по жанру
- [ ] Плеер на сайте

