import { error } from 'veclog'
import { AppError } from '../configs/error'

const saltRounds = 10

export async function hashPassword(pass: string): Promise<string> {
    const hash = await Bun.password.hash(pass, {
        algorithm: "bcrypt",
        cost: saltRounds, // number between 4-31
      });
      return hash
}