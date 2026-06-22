import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Favorite = sequelize.define('Favorite', {
    id_favorite: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_song: {
        type: DataTypes.INTEGER
    }
}, {
  tableName: 'Favorites',
  timestamps: false    
});

export default Favorite;