import express from 'express';
import { config } from './config/config';
import userRouter from './routes/user.routes';
import dbConnection from './config/database';

dbConnection();

const app = express();
const { PORT } = config;

app.use(express.json());

app.use('/api/users', userRouter);

app.listen(PORT, () => console.log(`Server listen at ${PORT}`));