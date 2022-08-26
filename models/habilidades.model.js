import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class HabilidadesModel extends Model {}

HabilidadesModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING (25),
        allowNull: true
    },
    porcentaje:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    url_imagen:{
        type: DataTypes.STRING (250),
        allowNull: true
    },
},  {
    sequelize: DatabaseConfig,
    tableName: 'habilidades',
    timestamps: false
}

);