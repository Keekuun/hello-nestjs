export type AppConfig = typeof import('./app');
export type TypeormConfig = typeof import('./typeorm');
export type RMQConfig = typeof import('./rmq');

enum Config {
  App = 'APP',
  Typeorm = 'Typeorm',
  RMQ = 'RMQ',
}

export const config = {
  [Config.App]: import('./app'),
  [Config.Typeorm]: import('./typeorm'),
  [Config.RMQ]: import('./rmq'),
} as const
