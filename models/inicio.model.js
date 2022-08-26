import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class InicioModel extends Model {}

InicioModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING (50),
        allowNull: true
    },
    puesto:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    url_imagen:{
        type: DataTypes.STRING (250),
        allowNull: true
    },
    descripcion:{
        type: DataTypes.TEXT(250),
        allowNull:true
    },
},  {
    sequelize: DatabaseConfig,
    tableName: 'inicio',
    timestamps: false
}

);