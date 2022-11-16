import express from 'express';
import { check } from 'express-validator';
import userController from '../controllers/user.controller';
import { validateRole } from '../helpers/db-validators';
import { validateFields } from '../middlewares/validate-fields';

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/create', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required and must be at least 6 characters').isLength({min: 6}),
    check('email', 'Not valid email').isEmail(),
    check('role', 'Not a valid role').custom(validateRole),
    //check('role', 'Not a valid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validateFields
], userController.createUser);

export default userRouter;