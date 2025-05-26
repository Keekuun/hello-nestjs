import {Module} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {ArticleService} from './article.service';
import {ArticleController} from './article.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Article} from "./entities/article.entity";
import Config from "@/config";

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {
  constructor(private configService: ConfigService) {
    // 使用 configService 获取配置
    const config = configService.get(Config.Typeorm)
    console.log(`Database config: `, config);
  }
}
