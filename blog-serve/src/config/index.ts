import { ConfigModuleOptions } from '@nestjs/config';

import appConfig from './app';
import typeormConfig from './typeorm';
import rmqConfig from './rmq';
import swaggerConfig from './swagger';

const Config = {
  App: 'APP',
  Typeorm: 'typeorm',
  RMQ: 'RMQ',
  Swagger: 'SWAGGER',
}

export const configModuleOptions: ConfigModuleOptions = {
  // 是否全局加载配置
  isGlobal: true,
  // 加载环境变量文件, 优先加载 .env.{NODE_ENV} 文件
  envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
  // 是否忽略环境变量文件
  ignoreEnvFile: false,
  load: [
    appConfig,
    typeormConfig,
    rmqConfig,
    swaggerConfig,
  ],
  cache: true
};

export default Config;
