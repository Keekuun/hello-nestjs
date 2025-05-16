import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { createServer } from 'node:net';
import { TransformInterceptor } from './interceptor/transform/transform.interceptor';
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

// 检查端口是否可用
async function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = createServer();
    server.once('error', () => {
      server.close();
      resolve(false);
    });
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    server.listen(port);
  });
}

// 获取可用端口
async function getAvailablePort(startPort: number): Promise<number> {
  let port = startPort;
  while (!(await isPortAvailable(port))) {
    port++;
  }
  return port;
}

async function bootstrap() {
  const startPort = process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000;
  const availablePort = await getAvailablePort(startPort);

  const app = await NestFactory.create(AppModule);

  // 校验 class-validator
  app.useGlobalPipes(new ValidationPipe());
  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 全局异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(availablePort);

  console.log(`The server is running at http://localhost:${availablePort}`);
}

bootstrap();
