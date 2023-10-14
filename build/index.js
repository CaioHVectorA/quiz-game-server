"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('express-async-errors');
var _veclog = require('veclog');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _defaultConfig = require('./configs/defaultConfig');
var _questionservices = require('./services/question.services'); var _questionservices2 = _interopRequireDefault(_questionservices);
 
const naked_app = _express2.default.call(void 0, )

const { app } = new (0, _defaultConfig._App)(naked_app)
const serv = new (0, _questionservices2.default)()

    serv.init().then(() => {
        app.listen('6220', () => _veclog.info.call(void 0, '🔥RODANDO🥸',false))
    })



