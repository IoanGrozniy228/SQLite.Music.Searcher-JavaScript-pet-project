import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Author = sequelize.define('Author', {
    id_author: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT
    },
    career_start_year: {
        type: DataTypes.INTEGER
    },
    photo_url: {
        type: DataTypes.TEXT
    }
}, {
  tableName: 'Authors',
  timestamps: false    
});

export default Author;