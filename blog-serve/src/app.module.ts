import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import {TypeOrmModule} from "@nestjs/typeorm";

const PostgresqlModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'nestjs-blog-serve',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});

@Module({
  imports: [
    PostgresqlModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
