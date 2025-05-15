import { DataSource } from 'typeorm';

import options from '@/config/database';

import type { DataSourceOptions } from 'typeorm';

export default new DataSource(options as DataSourceOptions);
