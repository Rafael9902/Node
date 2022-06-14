import express from 'express';
import { dbConnection } from './config/database';
import { config } from './config/config';
import userRouter from './routes/user.routes';

const app = express();
const { PORT } = config;

dbConnection();

app.use(express.json());

app.use('/api/users', userRouter);

app.listen(PORT, () => console.log(`Server listen at ${PORT}`));