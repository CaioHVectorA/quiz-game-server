import 'express-async-errors'
import { info } from 'veclog'
import express from 'express'
import { _App } from './configs/defaultConfig'
import QuestionServices from './services/question.services'
 
const naked_app = express()

const { app } = new _App(naked_app)
const serv = new QuestionServices()

    serv.init().then(() => {
        app.listen('6220', () => info('🔥RODANDO🥸',false))
    })



