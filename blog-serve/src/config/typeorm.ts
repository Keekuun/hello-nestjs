import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import {TypeOrmModuleOptions} from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";

export default (): TypeOrmModuleOptions & Partial<PostgresConnectionOptions> => ({
  type: String(process.env.DB_TYPE) as 'postgres',
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_DATABASE),
  logging: process.env.DB_LOGGING === 'true',
  migrations: process.env.DB_MIGRATIONS?.split(','),
  migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  dropSchema: process.env.DB_DROP_SCHEMA === 'true',
  // https://docs.nestjs.com/techniques/database#auto-load-entities
  autoLoadEntities: process.env.DB_AUTO_LOAD_ENTITIES === 'true',
  useUTC: true,
}) as const;
