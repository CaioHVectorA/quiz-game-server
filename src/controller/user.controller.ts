import { Request, Response } from 'express'
import { UserServices } from '../services/user.services'
import { UserLogin } from '../entities/user'
import { AppError } from '../configs/error'
import { info } from 'veclog'
const serv = new UserServices()
export default class UserController {
        async login(req: Request, res: Response) {
        const data: UserLogin = req.body
        const response = await serv.login(data)
        if (!response) throw new AppError('Senha incorreta', 401)
        res.status(200).json(response);
    }
    async create(req: Request, res: Response) {
        const { password, username }: UserLogin = req.body
        const response = await serv.create({ password, username })
        res.json(response)
    }
    async getUser(req: Request, res: Response) {
        const id = req.params.id
        const response = await serv.getUser({id})
        res.json(response)
    }
    async getRank(req: Request, res: Response) {
        const response = await serv.getRank()
        res.json(response)
    }
    async setPontuation(req: Request, res: Response) {
        const data =  req.body
        console.log('body:', data)
        const id = req.params.id
        const response = await serv.setPoints({ id, data })
        if (response !== 100) throw new AppError('Algo deu errado.')
        res.status(200).json({message: 'Pontuação mudada com sucesso!'})
    }
}