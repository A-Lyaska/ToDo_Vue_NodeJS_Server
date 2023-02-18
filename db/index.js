const { Sequelize } = require("sequelize");

//Создваем instance Sequelize
const sequelizeInstance = new Sequelize({
    //   dialect: "postgres",
    //   host: "21.23.35.4",
    //   port: 6000,
    //   database: "js-todo",
    //   username: "postgres",
    //   password: "qwerty10",

    dialect: "sqlite",
    storage: "./sqliteData/database.sqlite", //Путь до файла с данными
});

const initDB = async () => {
    try {
        await sequelizeInstance.authenticate(); //Авторизация нашей ORM в БД
        // await sequelize.dropSchema('public', {});
        // await sequelize.createSchema('public', {});
        await sequelizeInstance.sync(); //Синхронизация МОДЕЛЕЙ
        console.log("Sequelize was initialized");
    } catch (error) {
        console.log("Sequelize ERROR (initDB)", error);
        process.exit();
    }
};

module.exports = {
    sequelizeInstance,
    initDB,
};