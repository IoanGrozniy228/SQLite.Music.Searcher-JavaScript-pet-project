import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Album = sequelize.define('Album', {
    id_album: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_author: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.TEXT
    },
    number_of_songs: {
        type: DataTypes.INTEGER
    },
    cover_url: {
        type: DataTypes.TEXT
    }
}, {
  tableName: 'Albums',
  timestamps: false    
});

export default Album;