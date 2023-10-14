import { IPontuation } from "./pontuation"

export type IUser = {
    username: string,
    password?: string,
    playeds?: string | string[],
    id: string,
    pontuation: IPontuation[]
}
export type UserLogin = {
    username: string,
    password: string,
}

export type protectedUser = Omit<IUser, 'password'>
