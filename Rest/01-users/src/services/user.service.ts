import { Response } from "express";
import { UserInterface } from "../interfaces/user.interface";
import User from "../models/user";
import { encrypt } from "../utils/encrypt";


const getUsers = () => {
    console.log("bien");
}

const createUser = async(body: UserInterface, response: Response) => {
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