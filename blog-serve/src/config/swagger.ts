import {registerAs} from '@nestjs/config';

export default registerAs('swagger', () => ({
  // todo 接入 swagger
  enable: process.env.SWAGGER_ENABLE === 'true',
}));
