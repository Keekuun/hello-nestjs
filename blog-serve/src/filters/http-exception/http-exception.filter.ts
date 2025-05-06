import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from '@nestjs/common';
import {Response} from 'express';

// 全局异常过滤器
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    let message = exception.message;
    // 获取class-validator的错误信息
    const exceptionResponse = exception.getResponse();
    if (typeof exceptionResponse === 'object' && 'message' in exceptionResponse) {
      const errorMessage = exceptionResponse['message'];
      if (Array.isArray(errorMessage)) {
        // 如果是数组，取第一个错误信息
        message = errorMessage[0] || message;
      } else if (typeof errorMessage === 'string') {
        // 如果是字符串，直接使用
        message = errorMessage || message;
      }
    }

    response
      .status(status)
      .json({
        code: status,
        message,
        data: null,
        ok: false,
      });
  }
}
