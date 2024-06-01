import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { IUser } from "../models/IUsuario";


const userService: UserService = new UserService();
export class UserController {    

    creatUser(request: Request, response: Response) {
        const user: IUser = request.body;
        if(!user.name || !user.email) {
            return response.status(400).json({ massage: 'Bad Request' });
        } 
        const registeredUserData: IUser = userService.creatUser(user);
        return response.status(200).json({
            sucesso: true,
            registeredUserData
        });
    }

    getAllUsuarios(request: Request, response: Response) {
        const users: IUser[] = userService.getAllUser();
        return response.status(200).json(users);
    }

    deleteUser(request: Request, response: Response) {
        const body: IUser = request.body;
        const remainingUsers: IUser[] = userService.deleteUser(body);
        return response.status(200).json({ sucesso: true, remainingUsers });
    }
}