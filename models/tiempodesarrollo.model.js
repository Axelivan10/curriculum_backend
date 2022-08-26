import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';


export class TiempodesarrolloModel extends Model {}

TiempodesarrolloModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
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
    tableName: 'tiempo_desarrollo',
    timestamps: false
}

);