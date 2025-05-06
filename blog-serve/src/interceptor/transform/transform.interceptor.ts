import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from '@nestjs/common';
import {map, Observable} from 'rxjs';

export interface CommonResponse<T> {
  code: number;
  data: T;
  message: string;
  ok: boolean;
}

// 全局拦截器，返回格式统一
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data): CommonResponse<any> => ({
      code: 200,
      data,
      message: 'success',
      ok: true,
    })));
  }
}
