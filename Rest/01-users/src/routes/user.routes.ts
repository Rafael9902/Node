import express from 'express';
import userController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/create', userController.createUser);

export default userRouter;