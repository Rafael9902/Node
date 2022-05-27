import { Request, Response } from "express"
import { userService } from "../services/user.service";

const getUsers = (_req: Request, _res: Response) => {
    userService.getUsers();
}

const createUser = async(req: Request, res: Response) => {
    const { body } = req;
    
    res.status(200).send(await userService.createUser(body));
}

export default { getUsers, createUser }
