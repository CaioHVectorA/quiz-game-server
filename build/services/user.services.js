"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _userrepositories = require('../repositories/user.repositories');
var _hashPassword = require('../utils/hashPassword');
var _error = require('../configs/error');
var _veclog = require('veclog');

const repo = new (0, _userrepositories.UserRepository)()












 class UserServices {
    async login({ username, password }) {
        const userFound = await repo.getByUser(username)
        if (!userFound) throw new (0, _error.AppError)('Usuário Não existe!')
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
    async create({ username, password }) {
        let pass = ''
        const userFound = await repo.getByUser(username)
        if (userFound) throw new (0, _error.AppError)('Usuário já existe!')
        if (password) pass = await _hashPassword.hashPassword.call(void 0, password)
        const user = await repo.create({username,password: pass})
        return {
            username: user.username,
            id: user.id,
            pontuation: user.pontuations
        }
    }
    async getUser({ id }) {
        const user = await repo.getOne(id)
        return {
            id: user.id,
            username: user.username,
            pontuation: user.pontuations,
            playeds: user.playeds.split(' ')
        }
    }

    async getRank() {
        const ranking = await repo.all()
        const protecteds = ranking.map(u => ({username: u.username, id: u.id,pontuation: u.pontuations}))
        const withFullPontuation = []
        protecteds.forEach(item => {
            let full = 0
            item.pontuation.forEach((p) => full += p.quantity)
            withFullPontuation.push({...item, full})
        })
        const sorted = withFullPontuation.sort((item1, item2) => (item1.full < item2.full) ? 1 : (item1.full > item2.full) ? -1 : 0)
        _veclog.info.call(void 0, sorted)
        return sorted
    }
    async setPoints({ id, data }) {
        const response = await repo.setPontuation(id, data.quantity, data.type)
        return response
    }
} exports.UserServices = UserServices;