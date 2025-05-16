import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

const getTypeOrmConfig = (): PostgresConnectionOptions => {
  return {
    type: String(process.env.DB_TYPE) as 'postgres',
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_DATABASE),
    logging: process.env.DB_LOGGING === 'true',
    // entities: process.env.DB_ENTITIES?.split(','),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: process.env.DB_MIGRATIONS?.split(','),
    migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
    // synchronize: process.env.DB_SYNCHRONIZE === 'true',
    synchronize: true,
    dropSchema: process.env.DB_DROP_SCHEMA === 'true',
    useUTC: true,
  }
}

export default getTypeOrmConfig
