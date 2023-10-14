"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _user = require('./user');
var _question = require('./question');

 const router = _express.Router.call(void 0, ); exports.router = router

exports.router.use('/user',_user.userRoute)
exports.router.use('/questions',_question.questionRoute)