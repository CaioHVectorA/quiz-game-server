import { Request, Response } from 'express'
import QuestionServices from '../services/question.services'
const serv = new QuestionServices()
export default class QuestionController {
    async get(req: Request, res: Response) {
        const data = await serv.get(req.params.type.toUpperCase())
        console.log(data)
        res.json(data)
    }
    async getAll(req: Request, res: Response) {
        const data = await serv.getAll()
        res.json(data)
    }
}