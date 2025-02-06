import 'tsconfig-paths/register';

import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import config from './config/config';
import router from './routes';

dotenv.config();

const app: Application = express();

app.use(cors({
    origin: '*',
}));

app.use(express.json());

app.use(router);

app.listen(config.port, () => {
    if (config.serverProduction !== 'production')
        console.log(`Server running on http://localhost:${config.port}`);
});

export default app;
