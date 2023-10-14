import { AppError } from '../configs/error'
import { User, Pontuation, Prisma } from '@prisma/client/'
import { IUser, UserLogin } from '../entities/user'
import Repository from './repository'
import { IPontuation } from '../entities/pontuation'
type FullUser = Prisma.UserGetPayload<{
    include: {
        pontuations: true;
    }
}>
interface UserRepositoryInterface extends Repository {
    all(): Promise<FullUser[]>
    getOne(id: string): Promise<FullUser>
    create({ username, password }: Omit<Omit<IUser,'id'>,'pontuation'>): Promise<FullUser>
}

export class UserRepository extends Repository implements UserRepositoryInterface {
    async create({ username, password }: Omit<Omit<IUser,'id'>,'pontuation'>): Promise<FullUser> {
        const newUser = await this.prisma.user.create({data: {
            username,
            password: password ?? ''
        }, include: {pontuations: true}})
        const types = ['MATH', 'NATURE', 'SOCIAL', 'OTHERS']
        const promises = types.map(async (t) => {
            await this.prisma.pontuation.create({
                data: {
                    userId: newUser.id,
                    quantity: 0,
                    type: t
                }
            })
        })
        await Promise.all(promises)
        return newUser
    }
    async getByUser(username: string) {
        const found = this.prisma.user.findFirst({where: {username}, include: {pontuations: true}})
        if (!found) throw new AppError('Não Encontrou', 404)
        return found
    }
    async getOne(id: string): Promise<FullUser> {
        const found = await this.prisma.user.findUnique({where: {id}, include: {pontuations: true}})
        if (!found) throw new AppError('Não encontrou usuário',404)
        return found
    }
    async all(): Promise<FullUser[]> {
        const all = await this.prisma.user.findMany({include: {pontuations: true}})
        return all
    }
    async setPontuation(id: string, quantity: number, type: string): Promise<number> {
        const userFound = await this.prisma.user.findUnique({where: {id}, include: {pontuations: true}})
        if (!userFound) throw new AppError('Usuário não encontrado.')
        let arr: string[];
        arr = [...userFound.playeds.split(' ')]
        if (userFound.playeds === 'NONE') arr = []
        arr.push(type)
        await this.prisma.user.update({where: {id}, data: { playeds: arr.join(' ') }})
        const _pontuation = userFound.pontuations.find(pontuation => pontuation.type === type)
        if (!_pontuation) throw new AppError('Pontuação não encontrada.')
        const pontuation = await this.prisma.pontuation.update({
        where: {
            id: _pontuation.id
        }, 
            data: {
                quantity: _pontuation.quantity + quantity,
            }
        })
        return 100
        }
}