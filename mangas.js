const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

// "Table Manga dans la dbb qiui gere les requettes vers les mangas"
const Mangas = sequelize.define(
  "Mangas",
  {
    manga_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        len: [2, 100],
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 50],
      },
    },
    publication_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [5, Infinity],
      },
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, Infinity],
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [5, Infinity],
        },
      },
    stock_quantity: DataTypes.INTEGER,
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, Infinity],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Mangas;