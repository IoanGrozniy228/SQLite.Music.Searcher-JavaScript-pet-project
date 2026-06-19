import { Sequelize } from "sequelize";

const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: './music.db',
    logging: true
});

export default sequelize;