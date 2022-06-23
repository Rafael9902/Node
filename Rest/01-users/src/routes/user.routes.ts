import express from 'express';
import { check } from 'express-validator';
import userController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/create', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required and must be at least 6 characters').isLength({min: 6}),
    check('email', 'Not valid email').isEmail()
], userController.createUser);

export default userRouter;