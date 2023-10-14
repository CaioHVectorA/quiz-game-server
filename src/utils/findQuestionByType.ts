import { Answer, IQuestion } from "../entities/question"
import { questions } from './questionsData'
export default function findQuestionByType(type: 'MATH' | 'SOCIAL' | 'OTHERS' | 'NATURE'): IQuestion {
    const filtered = questions.filter(q => q.type === type)
    return filtered[Math.floor(Math.random() * filtered.length)]
}