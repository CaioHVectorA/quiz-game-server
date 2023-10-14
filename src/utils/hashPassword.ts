import { error } from 'veclog'
import { AppError } from '../configs/error'
import { genSalt, hash as hashPass } from 'bcrypt'
// import Bun from 'bun'
const saltRounds = 10

export async function hashPassword(pass: string): Promise<string> {
    // const hash = await 
    const hash = await hashPass(pass,saltRounds);
    return hash
}