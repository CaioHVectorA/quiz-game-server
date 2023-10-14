import 'express-async-errors'
import { Application, json, static as static_, Request, Response, NextFunction } from "express";
import cors from 'cors'
import { AppError } from "./error";
import { router } from '../router';
import bodyParser from 'body-parser';
export class _App {
    app: Application;
    constructor(app: Application) {
        this.app = app
        app.use(cors())
        app.use(json())
        // app.use(bodyParser.json({limit: '10mb'}))
        // app.use(bodyParser.urlencoded({ extended: true }))
        app.use(router)
        app.use(static_('public'))
        app.use(
            (err: Error, _request: Request, response: Response, _next: NextFunction) => {
              if (err instanceof AppError) {
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
} 