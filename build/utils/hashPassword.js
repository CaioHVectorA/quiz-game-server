"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _bcrypt = require('bcrypt');
// import Bun from 'bun'
const saltRounds = 10

 async function hashPassword(pass) {
    // const hash = await 
    const hash = await _bcrypt.hash.call(void 0, pass,saltRounds);
    return hash
} exports.hashPassword = hashPassword;