"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _questionsData = require('./questionsData');
 function findQuestionByType(type) {
    const filtered = _questionsData.questions.filter(q => q.type === type)
    return filtered[Math.floor(Math.random() * filtered.length)]
} exports.default = findQuestionByType;