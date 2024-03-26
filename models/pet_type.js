const {Sequelize, DataTypes} = require('sequelize');
const databaseConnection = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnection);

const petTypeModel = sequelize.define('pet_type', {
    pet_type_id: {type: Sequelize.INTEGER, autoIncrement: true,
    primaryKey: true},
    type: {type: Sequelize.STRING, allowNull: false},
},
{
    tableName: 'pet_type',
    timestamps: false,
    singular: 'pet_type',
    plural: 'pet_type'
}
    );

    module.exports = petTypeModel;