"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _repository = require('./repository'); var _repository2 = _interopRequireDefault(_repository);
var _error = require('../configs/error');







 class QuestionRepository extends _repository2.default  {
    async delete() {
        await this.prisma.question.deleteMany()
    }
    async change(data) {
        await this.delete()
        const promises = data.map(async (q) => {
            const convertedAnswers = JSON.stringify(q.answers)
            const created = await this.prisma.question.create({data: {
                answers: convertedAnswers,body: q.body,type: q.type,date: q.date
            }})
        })
        await this.prisma.user.updateMany({data: {
            playeds: 'NONE'
        }})
        await Promise.all(promises).catch(err => {throw new (0, _error.AppError)(`Erro ${err}`)})
        return true
    }
    async get(type) {
        console.log(type)
        const data = await this.prisma.question.findFirst({where: {
            type
        }})
        if (!data) throw new (0, _error.AppError)('Questão não encontrada',404)
        return data
    }
    async getAll() {
        const data = await this.prisma.question.findMany()
        return data
    }
} exports.default = QuestionRepository;