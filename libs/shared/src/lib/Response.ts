/* eslint-disable class-methods-use-this */
import { Response as ExpressResponse } from 'express';

export class Response {
  success(res: ExpressResponse, message: unknown, statusCode = 200) {
    res.status(statusCode).send({
      error: '',
      body: message,
    });
  }

  error(res: ExpressResponse, message: unknown, statusCode = 500) {
    res.status(statusCode || 500).send({
      error: message,
      body: '',
    });
  }
}
