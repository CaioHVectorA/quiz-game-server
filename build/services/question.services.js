"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _findQuestionByType = require('../utils/findQuestionByType'); var _findQuestionByType2 = _interopRequireDefault(_findQuestionByType);

var _questionrepositories = require('../repositories/question.repositories'); var _questionrepositories2 = _interopRequireDefault(_questionrepositories);


const repo = new (0, _questionrepositories2.default)()
 class QuestionServices {
    async init() {
        await repo.delete()
        const questions = [_findQuestionByType2.default.call(void 0, 'MATH'), _findQuestionByType2.default.call(void 0, 'NATURE'), _findQuestionByType2.default.call(void 0, 'SOCIAL'), _findQuestionByType2.default.call(void 0, 'OTHERS')]
        await repo.change(questions)
    }
    async change() {
        const data = await repo.get('MATH')
        console.log(data.date, new Date())
        if (data && data.date.getDate() === new Date().getDate()) return
        const questions = [_findQuestionByType2.default.call(void 0, 'MATH'), _findQuestionByType2.default.call(void 0, 'NATURE'), _findQuestionByType2.default.call(void 0, 'SOCIAL'), _findQuestionByType2.default.call(void 0, 'OTHERS')]
        repo.change(questions)
    }
    async get(type) {
        await this.change()
        const data = await repo.get(type)
        // @ts-ignore
        return data
    }
    async getAll() {
        await this.change()
        const data = await repo.getAll()
        return data
    }
} exports.default = QuestionServices;