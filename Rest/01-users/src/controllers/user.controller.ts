import { Request, Response } from "express"
import { userService } from "../services/user.service";

const getUsers = (_req: Request, _res: Response) => {
    userService.getUsers();
}

const createUser = async(req: Request, res: Response) => {    
    return await userService.createUser(req.body, res);
}

export default { getUsers, createUser }
   