import f from '../utils/findQuestionByType'
import { IQuestion } from "../entities/question";
import QuestionRepository from "../repositories/question.repositories";
import { AppError } from '../configs/error';
import { Question } from '@prisma/client';
const repo = new QuestionRepository()
export default class QuestionServices {
    async init(): Promise<void> {
        await repo.delete()
        const questions = [f('MATH'), f('NATURE'), f('SOCIAL'), f('OTHERS')]
        await repo.change(questions)
    }
    async change(): Promise<void> {
        const data = await repo.get('MATH')
        console.log(data.date, new Date())
        if (data && data.date.getDate() === new Date().getDate()) return
        const questions = [f('MATH'), f('NATURE'), f('SOCIAL'), f('OTHERS')]
        repo.change(questions)
    }
    async get(type: string): Promise<IQuestion> {
        await this.change()
        const data = await repo.get(type)
        // @ts-ignore
        return data
    }
    async getAll(): Promise<Question[]> {
        await this.change()
        const data = await repo.getAll()
        return data
    }
}