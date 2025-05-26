export default () => ({
  env: String(process.env.APP_ENV) || 'development',
  name: String(process.env.APP_NAME),
  host: String(process.env.APP_HOST),
  port: Number(process.env.APP_PORT),
  secret: String(process.env.APP_SECRET),
  swagger: String(process.env.APP_SWAGGER) === 'true',
  jwt: {
    secret: String(process.env.APP_JWT_SECRET),
    signOptions: {
      expiresIn: Number(process.env.APP_JWT_EXPIRES),
    },
  },
}) as const;
