import { Response, Request } from "express";
import { validationResult } from "express-validator";
import User from "../models/user";
import { encrypt } from "../utils/encrypt";


const getUsers = () => {
    console.log("bien");
}

const createUser = async(request: Request, response: Response) => {
    const errors = validationResult(request);
    const { body } = request;

    console.log(errors);

    if(!errors.isEmpty()) return response.status(400).json(errors);

    const { email } = body;
    const user = new User(body);
    user.password = encrypt(body.password);

    const existEmail =await checkEmailExists(email);

    if(existEmail) return response.status(400).json({
        message: 'Email already register'
    })

    await user.save();

    return response.status(200).send(user);
}

const checkEmailExists = async(email: string) => {
    return User.findOne({ email });
}

export const userService = {
    getUsers,
    createUser
}