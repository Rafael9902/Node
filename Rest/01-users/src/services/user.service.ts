import { UserInterface } from "../interfaces/user.interface";
import User from "../models/user";
import { encrypt } from "../utils/encrypt";


const getUsers = () => {
    console.log("bien");
}

const createUser = async(request: UserInterface) => {   
    const user = new User(request);
    user.password = encrypt(request.password);
    
    await user.save()

    return user;
}

export const userService = {
    getUsers,
    createUser
}