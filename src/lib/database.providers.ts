import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '111111',
      database: 'test',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',   //通用模式
      ],
      synchronize: true,
    }),
  },
];