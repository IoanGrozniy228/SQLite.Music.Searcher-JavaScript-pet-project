import express from 'express';
import sequelize from './db.js';
import musicRoutes from './routes/music.routes.js';

const port = 5000;
const app = express();
app.use(express.json());
app.use(musicRoutes);

async function bootApp() {
    await sequelize.authenticate();
    app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
}
bootApp();