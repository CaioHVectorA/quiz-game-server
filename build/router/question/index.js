"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _questionscontroller = require('../../controller/questions.controller'); var _questionscontroller2 = _interopRequireDefault(_questionscontroller);
 const questionRoute = _express.Router.call(void 0, ); exports.questionRoute = questionRoute
const cont = new (0, _questionscontroller2.default)()
exports.questionRoute.get('/',cont.getAll)
exports.questionRoute.get('/:type', cont.get)