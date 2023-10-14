"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _client = require('@prisma/client');

class Repository {
  __init() {this.prisma = new (0, _client.PrismaClient)()}  

  constructor() {;Repository.prototype.__init.call(this);
  }
}

exports. default = Repository