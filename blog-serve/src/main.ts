import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createServer } from 'node:net';
import {TransformInterceptor} from "./interceptor/transform/transform.interceptor";
import {HttpExceptionFilter} from "./filters/http-exception/http-exception.filter";

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
  const startPort = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const availablePort = await getAvailablePort(startPort);

  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(availablePort);

  console.log(`The server is running at http://localhost:${availablePort}`);
}

bootstrap();
