import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import getTypeOrmConfig from './typeorm';
import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";

// 加载 .env 文件
dotenv.config();

describe('typeorm', () => {
  it('should connect to the database', async () => {
    const config = getTypeOrmConfig() as DataSourceOptions;
    const dataSource = new DataSource(config);

    console.log('dataSource options', dataSource.options);

    await dataSource.initialize();
    expect(dataSource.isInitialized).toBe(true);
    await dataSource.destroy();
  });
});
