import { Sequelize } from "sequelize";

const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: './music.db',
    logging: false
});

export default sequelize;