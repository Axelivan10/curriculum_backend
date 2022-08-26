import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class HistorialModel extends Model {}

HistorialModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    puesto:{
        type: DataTypes.STRING (25),
        allowNull: true
    },
    titulo:{
        type: DataTypes.STRING (40),
        allowNull: true
    },
    fecha_inicio:{
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    fecha_fin:{
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    descripcion:{
        type: DataTypes.TEXT(250),
        allowNull:true
    },
},  {
    sequelize: DatabaseConfig,
    tableName: 'historial',
    timestamps: false
}

);