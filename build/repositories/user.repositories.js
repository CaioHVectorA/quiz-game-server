"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }var _error = require('../configs/error');


var _repository = require('./repository'); var _repository2 = _interopRequireDefault(_repository);












 class UserRepository extends _repository2.default  {
    async create({ username, password }) {
        const newUser = await this.prisma.user.create({data: {
            username,
            password: _nullishCoalesce(password, () => ( ''))
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
    async getByUser(username) {
        const found = this.prisma.user.findFirst({where: {username}, include: {pontuations: true}})
        if (!found) throw new (0, _error.AppError)('Não Encontrou', 404)
        return found
    }
    async getOne(id) {
        const found = await this.prisma.user.findUnique({where: {id}, include: {pontuations: true}})
        if (!found) throw new (0, _error.AppError)('Não encontrou usuário',404)
        return found
    }
    async all() {
        const all = await this.prisma.user.findMany({include: {pontuations: true}})
        return all
    }
    async setPontuation(id, quantity, type) {
        const userFound = await this.prisma.user.findUnique({where: {id}, include: {pontuations: true}})
        if (!userFound) throw new (0, _error.AppError)('Usuário não encontrado.')
        let arr;
        arr = [...userFound.playeds.split(' ')]
        if (userFound.playeds === 'NONE') arr = []
        arr.push(type)
        await this.prisma.user.update({where: {id}, data: { playeds: arr.join(' ') }})
        const _pontuation = userFound.pontuations.find(pontuation => pontuation.type === type)
        if (!_pontuation) throw new (0, _error.AppError)('Pontuação não encontrada.')
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
} exports.UserRepository = UserRepository;