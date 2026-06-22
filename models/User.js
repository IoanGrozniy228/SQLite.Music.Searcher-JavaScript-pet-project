import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('User', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: DataTypes.TEXT
    },
    password: {
        type: DataTypes.TEXT
    }
}, {
  tableName: 'Users',
  timestamps: false    
});

export default User;