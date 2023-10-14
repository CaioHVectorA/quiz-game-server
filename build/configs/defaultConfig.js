"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('express-async-errors');
var _express = require('express');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _error = require('./error');
var _router = require('../router');

 class _App {
    
    constructor(app) {
        this.app = app
        app.use(_cors2.default.call(void 0, ))
        app.use(_express.json.call(void 0, ))
        // app.use(bodyParser.json({limit: '10mb'}))
        // app.use(bodyParser.urlencoded({ extended: true }))
        app.use(_router.router)
        app.use(_express.static.call(void 0, 'public'))
        app.use(
            (err, _request, response, _next) => {
              if (err instanceof _error.AppError) {
                return response.status(err.statusCode).json({
                  status: "error",
                  message: err.message,
                });
              }
              return response.status(500).json({
                status: "error",
                message: `Internal server error - ${err.message}`,
              });
            }
          );
    }
} exports._App = _App; 