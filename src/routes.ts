import { Router } from "express";
import { UserController } from "./controllers/UserController";

export const router: Router = Router();
const userController: UserController = new UserController();

router.post('/user', userController.creatUser);
router.get('/user', userController.getAllUsuarios);
router.delete('/user', userController.deleteUser);