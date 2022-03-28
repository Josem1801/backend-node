import {Sequelize} from "sequelize";
import {config} from "config/config";
import {setupModels} from "db/models/index";
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
export const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const sequelize = new Sequelize(URI,{
	dialect: "postgres", logging: console.log
});

setupModels(sequelize);

sequelize.sync();

