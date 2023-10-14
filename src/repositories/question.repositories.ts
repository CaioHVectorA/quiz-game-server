import { Question } from "@prisma/client"
import { IQuestion } from "../entities/question"
import Repository from "./repository"
import { AppError } from "../configs/error"

interface QuestionRepositoryInterface {
    change(data: IQuestion[]): Promise<boolean>
    get(type: string): Promise<Question>
    delete(): Promise<void>
}

export default class QuestionRepository extends Repository implements QuestionRepositoryInterface {
    async delete(): Promise<void> {
        await this.prisma.question.deleteMany()
    }
    async change(data: IQuestion[]): Promise<boolean> {
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
        await Promise.all(promises).catch(err => {throw new AppError(`Erro ${err}`)})
        return true
    }
    async get(type: string): Promise<Question> {
        console.log(type)
        const data = await this.prisma.question.findFirst({where: {
            type
        }})
        if (!data) throw new AppError('Questão não encontrada',404)
        return data
    }
    async getAll(): Promise<Question[]> {
        const data = await this.prisma.question.findMany()
        return data
    }
}