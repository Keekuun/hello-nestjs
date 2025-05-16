import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import getTypeOrmConfig from './typeorm';

// 加载 .env 文件
dotenv.config();

describe('typeorm', () => {
  it('should connect to the database', async () => {
    const config = getTypeOrmConfig();
    const dataSource = new DataSource(config);
    await dataSource.initialize();
    expect(dataSource.isInitialized).toBe(true);
    await dataSource.destroy();
  });
});
