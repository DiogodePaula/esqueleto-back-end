import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

const models = [];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL, dataBaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection));
  }
}

export default new DataBase();
