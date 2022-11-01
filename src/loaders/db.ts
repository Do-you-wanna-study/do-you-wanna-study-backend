import 'reflect-metadata';
import config from '../config';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';

/**
 * 데이터베이스 커넥션을 생성한다.
 */
const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.host,
  port: config.dbport,
  username: config.user,
  password: config.password,
  database: config.database,
  synchronize: false,
  logging: true,
  entities: [__dirname + "/../entities/*.{js,ts}"],
});

const connectDB = async () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('    ############# DATABASE CONNECTION SUCCESS ##############');
    })
    .catch((error) => {
      console.log('ERROR IN DATABASE');
      throw error;
    });
}

export { AppDataSource, connectDB };
