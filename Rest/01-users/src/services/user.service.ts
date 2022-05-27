import { UserInterface } from "../interfaces/user.interface";
import User from "../models/user";

const getUsers = () => {
    console.log("bien");
}

const createUser = async(request: UserInterface) => {
    const user = new User(request);
    await user.save()

    return user;
}

export const userService = {
    getUsers,
    createUser
}