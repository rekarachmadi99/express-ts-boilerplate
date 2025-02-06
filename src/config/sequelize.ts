import { Sequelize } from 'sequelize';
import config from './config';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  host: config.db.host,
  dialect: 'mysql',
  logging: process.env.NODE_ENV === 'production' ? false : console.log,
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });


if (process.env.NODE_ENV !== 'production') {
  sequelize.sync({ force: false })
    .then(() => {
      console.log('Database & tables synced!');
    })
    .catch((error) => {
      console.error('Error syncing database:', error);
    });
}

export default sequelize;
