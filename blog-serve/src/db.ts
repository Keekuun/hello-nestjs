import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

import getTypeOrmConfig from "@/config/typeorm";

// 加载 .env 文件
dotenv.config();

const config = getTypeOrmConfig();

console.log('env', process.env)

export default new DataSource(config);
