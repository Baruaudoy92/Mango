const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

// "Table Client dans la dbb qui gere les requettes vers les clients"

const Client = sequelize.define(
  "Client",
  {
    client_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 100],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 150],
      },
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 10],
        },
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [5, Infinity],
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    birth_date: DataTypes.DATE,
    
  },
  {
    timestamps: true,
  }
);

module.exports = Client;