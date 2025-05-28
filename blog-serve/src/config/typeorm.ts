import {registerAs} from '@nestjs/config';
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import {TypeOrmModuleOptions} from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";

export default registerAs('typeorm', (): TypeOrmModuleOptions & Partial<PostgresConnectionOptions> => ({
  type: String(process.env.DB_TYPE) as 'postgres',
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_DATABASE),
  logging: process.env.DB_LOGGING === 'true',
  migrations: process.env.DB_MIGRATIONS?.split(','),
  migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
  // 生产模式同步一定要设置为 false
  // synchronize: process.env.DB_SYNCHRONIZE === 'true',
  synchronize: false,
  dropSchema: process.env.DB_DROP_SCHEMA === 'true',
  entities: process.env.DB_ENTITIES?.split(',') || [],
  // https://docs.nestjs.com/techniques/database#auto-load-entities
  autoLoadEntities: true,
  useUTC: true,
}));
