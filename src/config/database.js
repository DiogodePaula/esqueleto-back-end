require('dotenv').config();

module.exports = {
  url: process.env.DATABASE_URL,
  define: {
    // é para quando os arquivos são criados e por isso temos o updated e created
    timestamp: true,
    undercored: true,
    undercoredAll: true,
  },
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
