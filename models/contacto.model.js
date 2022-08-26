import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class ContactoModel extends Model {}

ContactoModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    correo:{
        type: DataTypes.STRING (40),
        allowNull: true
    },
    direccion:{
        type: DataTypes.TEXT(250),
        allowNull: true
    },
    usuario_linkedin:{
        type: DataTypes.STRING(40),
        allowNull: true
    },
    url_imagen_linkedin:{
        type: DataTypes.STRING (250),
        allowNull: true
    },
    url_imagen_mapa:{
        type: DataTypes.STRING (250),
        allowNull: true
    },
},  {
    sequelize: DatabaseConfig,
    tableName: 'contacto',
    timestamps: false
}

);