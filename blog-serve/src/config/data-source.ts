import 'tsconfig-paths/register'; // 添加路径别名解析支持
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

import getTypeOrmConfig from "../config/typeorm";
import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";

// 加载 .env 文件
dotenv.config();
const config = getTypeOrmConfig() as DataSourceOptions;

export default new DataSource(config)
