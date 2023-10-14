"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _usercontroller = require('../../controller/user.controller'); var _usercontroller2 = _interopRequireDefault(_usercontroller);

 const userRoute = _express.Router.call(void 0, ); exports.userRoute = userRoute
const control = new (0, _usercontroller2.default)()
exports.userRoute.post('/login', control.login)
exports.userRoute.post('/', control.create)
exports.userRoute.get('/:id', control.getUser)
exports.userRoute.get('/', control.getRank)
exports.userRoute.put('/pontuation/:id', control.setPontuation)