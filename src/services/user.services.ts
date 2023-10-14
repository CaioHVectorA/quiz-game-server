import { IUser, UserLogin, protectedUser } from "../entities/user";
import { UserRepository } from "../repositories/user.repositories";
import { hashPassword } from "../utils/hashPassword";
import { AppError } from '../configs/error';
import { info } from "veclog";
import { IPontuation } from "../entities/pontuation";
const repo = new UserRepository()
type sorted = {
    username: string;
    id: string;
    pontuation: {
        id: number;
        type: string;
        quantity: number;
        userId: string;
    }[];
    full: number
}

export class UserServices {
    async login({ username, password }: UserLogin): Promise<protectedUser | false> {
        const userFound = await repo.getByUser(username)
        if (!userFound) throw new AppError('Usuário Não existe!')
        // @ts-ignore -- EXPLICAÇÃO: SE O USUÁRIO ESTÁ LOGANDO É PORQUE A SENHA EXISTE...
        // no front não vai ter como logar sem uma senha..
        const correctPass = await Bun.password.verify(password, userFound.password)
        if (!correctPass) return false
        return {
            id: userFound.id,
            username: userFound.username,
            pontuation: userFound.pontuations,
            playeds: userFound.playeds.split(' ')
        }
    }
    async create({ username, password }: UserLogin): Promise<protectedUser> {
        let pass = ''
        const userFound = await repo.getByUser(username)
        if (userFound) throw new AppError('Usuário já existe!')
        if (password) pass = await hashPassword(password)
        const user = await repo.create({username,password: pass})
        return {
            username: user.username,
            id: user.id,
            pontuation: user.pontuations
        }
    }
    async getUser({ id }: Pick<IUser, 'id'>): Promise<protectedUser> {
        const user = await repo.getOne(id)
        return {
            id: user.id,
            username: user.username,
            pontuation: user.pontuations,
            playeds: user.playeds.split(' ')
        }
    }

    async getRank(): Promise<sorted[]> {
        const ranking = await repo.all()
        const protecteds = ranking.map(u => ({username: u.username, id: u.id,pontuation: u.pontuations}))
        const withFullPontuation: sorted[] = []
        protecteds.forEach(item => {
            let full = 0
            item.pontuation.forEach(p => full += p.quantity)
            withFullPontuation.push({...item, full})
        })
        const sorted = withFullPontuation.sort((item1, item2) => (item1.full < item2.full) ? 1 : (item1.full > item2.full) ? -1 : 0)
        info(sorted)
        return sorted
    }
    async setPoints({ id, data }: { id: string, data: { quantity: number, type: string } }): Promise<number> {
        const response = await repo.setPontuation(id, data.quantity, data.type)
        return response
    }
}