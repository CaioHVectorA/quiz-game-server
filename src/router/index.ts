import { Router } from "express";
import { userRoute } from "./user";
import { questionRoute } from './question'

export const router = Router()

router.use('/user',userRoute)
router.use('/questions',questionRoute)