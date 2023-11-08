import { ConnectOptions, connect, set } from 'mongoose';
import { NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE } from '@config';
import { logger } from '@/utils/logger';

export const dbConnection = async () => {
  logger.info('Connecting to database...');
  const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

  const connectOptions: ConnectOptions = {
    user: 'root',
    pass: 'root',
  };

  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  set('strictQuery', true);

  await connect(url, connectOptions);
  logger.info('Connected to database');
};
