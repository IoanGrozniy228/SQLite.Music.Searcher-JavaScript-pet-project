import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './db.js';
import musicRoutes from './routes/music.routes.js';
import userRoutes from './routes/user.routes.js';
import rateLimit from 'express-rate-limit';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 5000;
const app = express();
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 30,
    message: { error: 'Too many requests, try again later' }
});

app.use(limiter);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(musicRoutes);
app.use(userRoutes);

async function bootApp() {
    await sequelize.authenticate();
    app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
}
bootApp();