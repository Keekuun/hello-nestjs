import { DataSource } from 'typeorm';

import getTypeOrmConfig from "@/config/typeorm";

export default new DataSource(getTypeOrmConfig());
