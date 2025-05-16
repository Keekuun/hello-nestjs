import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ArticleModule} from "@/modules/article/article.module";
import getTypeOrmConfig from "@/config/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', cache: true }),
    TypeOrmModule.forRoot(getTypeOrmConfig()),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
