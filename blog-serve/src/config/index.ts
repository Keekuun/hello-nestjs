import { ConfigModuleOptions } from '@nestjs/config';

import appConfig from './app';
import typeOrmConfig from './typeorm';
import rmqConfig from './rmq';
import swaggerConfig from './swagger';
export { appConfig, typeOrmConfig, rmqConfig, swaggerConfig };

export type AppConfigType = typeof appConfig;
export type TypeormConfigType = typeof typeOrmConfig;
export type RMQConfig = typeof rmqConfig;
export type SwaggerConfig = typeof swaggerConfig;



enum Config {
  App = 'APP',
  Typeorm = 'TYPEORM',
  RMQ = 'RMQ',
  Swagger = 'SWAGGER',
}

export const configModuleOptions: ConfigModuleOptions = {
  // 是否全局加载配置
  isGlobal: true,
  // 加载环境变量文件, 优先加载 .env.{NODE_ENV} 文件
  envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
  // 是否忽略环境变量文件
  ignoreEnvFile: false,
  load: [
    () => ({[Config.App]: appConfig()}),
    () => ({[Config.Typeorm]: typeOrmConfig()}),
    () => ({[Config.RMQ]: rmqConfig()}),
    () => ({[Config.Swagger]: swaggerConfig()}),
  ],
  cache: true
};

export default Config;
