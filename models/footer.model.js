import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class FooterModel extends Model {}

FooterModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING (40),
        allowNull: true
    },
    url_imagen:{
        type: DataTypes.STRING (250),
        allowNull: true
    },
    url_link:{
        type: DataTypes.STRING (250),
        allowNull: true
    },
},  {
    sequelize: DatabaseConfig,
    tableName: 'footer',
    timestamps: false
}

);