"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _userservices = require('../services/user.services');

var _error = require('../configs/error');

const serv = new (0, _userservices.UserServices)()
 class UserController {
        async login(req, res) {
        const data = req.body
        const response = await serv.login(data)
        if (!response) throw new (0, _error.AppError)('Senha incorreta', 401)
        res.status(200).json(response);
    }
    async create(req, res) {
        const { password, username } = req.body
        const response = await serv.create({ password, username })
        res.json(response)
    }
    async getUser(req, res) {
        const id = req.params.id
        const response = await serv.getUser({id})
        res.json(response)
    }
    async getRank(req, res) {
        const response = await serv.getRank()
        res.json(response)
    }
    async setPontuation(req, res) {
        const data =  req.body
        console.log('body:', data)
        const id = req.params.id
        const response = await serv.setPoints({ id, data })
        if (response !== 100) throw new (0, _error.AppError)('Algo deu errado.')
        res.status(200).json({message: 'Pontuação mudada com sucesso!'})
    }
} exports.default = UserController;