const Sequelize = require('sequelize-auto');
require('dotenv').config();

// instance mysql connection

const auto = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  directory: 'src/models',
  caseFile: 'c',
  caseModel: 'c',
  caseProp: 'c',
  lang: 'js',
  additional: {
    timestamps: false,
  },
});

auto.run().then((resp) => {
  // eslint-disable-next-line no-console
  console.log(resp);
});
