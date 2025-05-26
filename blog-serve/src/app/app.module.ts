import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ArticleModule} from "@/modules/article/article.module";
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import Config, {configModuleOptions} from "@/config";

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    // Load configuration from config files
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get(Config.Typeorm) as TypeOrmModuleOptions,
    }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
