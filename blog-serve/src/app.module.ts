import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const DatabaseModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: '123456',
  database: 'nestjs-blog-serve',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
});

@Module({
  imports: [
    DatabaseModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
