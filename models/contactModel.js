const { DataTypes } = require('sequelize');
const connectDb = require('../config/dbConnection');

const Contact = connectDb.define("Contact",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, 
    {
        timestamps: true,
        tableName: "contacts"
});

module.exports = Contact;