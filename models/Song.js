import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Song = sequelize.define('Song', {
    id_song: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_album: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.TEXT
    },
    duration_sec: {
        type: DataTypes.INTEGER
    },
    genre: {
        type: DataTypes.TEXT
    },
    youtube_url: {
        type: DataTypes.TEXT
    }
}, {
  tableName: 'Songs',
  timestamps: false    
});

export default Song;