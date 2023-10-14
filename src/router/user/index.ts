import { Router } from "express";
import UserController from "../../controller/user.controller";

export const userRoute = Router()
const control = new UserController()
userRoute.post('/login', control.login)
userRoute.post('/', control.create)
userRoute.get('/:id', control.getUser)
userRoute.get('/', control.getRank)
userRoute.put('/pontuation/:id', control.setPontuation)