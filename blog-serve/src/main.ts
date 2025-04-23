import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as net from 'net';

// 检查端口是否可用
async function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => {
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
  const startPort = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
  const availablePort = await getAvailablePort(startPort);
  
  const app = await NestFactory.create(AppModule);
  await app.listen(availablePort);
  
  console.log(`服务器运行在 http://localhost:${availablePort}`);
}

bootstrap();
