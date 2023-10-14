import { Router } from "express";
import QuestionController from '../../controller/questions.controller'
export const questionRoute = Router()
const cont = new QuestionController()
questionRoute.get('/',cont.getAll)
questionRoute.get('/:type', cont.get)