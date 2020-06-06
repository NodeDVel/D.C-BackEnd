import { Sequelize } from 'sequelize';

import * as dotenv from 'dotenv';

dotenv.config();

const db_config = {
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD
};

export const sequelize: Sequelize = new Sequelize({
  database: db_config.DB_NAME,
  username: db_config.DB_USERNAME,
  password: db_config.DB_PASSWORD,
  host: db_config.DB_HOST,
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }
});

export const connect = async (force: boolean, logging?: boolean) => {
  try {
    await sequelize.sync({ force, logging });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};