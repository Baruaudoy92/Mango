//"Sequelize = "ORM"=Object-Relatinal-Mapping"-permet de manipuler les donnes de BDD.
const {Sequelize}=require("sequelize")

const sequelize = new Sequelize("mangaDB","postgres","Bangla2024",{
    dialect:"postgres",
    host:"localhost",
    username:"postgres",
    password:"Bangla2024",
    database:"mangaDB",
    logging: console.log
})

module.exports={sequelize};