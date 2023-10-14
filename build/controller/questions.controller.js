"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _questionservices = require('../services/question.services'); var _questionservices2 = _interopRequireDefault(_questionservices);
const serv = new (0, _questionservices2.default)()
 class QuestionController {
    async get(req, res) {
        const data = await serv.get(req.params.type.toUpperCase())
        console.log(data)
        res.json(data)
    }
    async getAll(req, res) {
        const data = await serv.getAll()
        res.json(data)
    }
} exports.default = QuestionController;