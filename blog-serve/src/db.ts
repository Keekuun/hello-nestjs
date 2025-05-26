import {DataSource} from 'typeorm';

import getTypeOrmConfig from "@/config/typeorm";
import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";

const config = getTypeOrmConfig() as DataSourceOptions;

export default new DataSource(config);
