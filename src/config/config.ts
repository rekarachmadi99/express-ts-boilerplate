// src/config/config.ts
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

export default {
  port: process.env.PORT || 4000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'myapp',
  },
  jwtSecret: process.env.JWT_SECRET || '',
  serverProduction: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
