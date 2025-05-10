import {
  Controller,
  Get,
  Post,
  Body,
  Query, NotFoundException, BadRequestException,
} from '@nestjs/common';
import {ArticleService} from './article.service';
import {CreateArticleDto} from './dto/create-article.dto';
import {UpdateArticleDto} from './dto/update-article.dto';
import {IdDto} from "../../common/dto/id.dto";
import {ArticleListDto} from "@/modules/article/dto/article-list.dto";

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {
  }

  @Post('create')
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get('list')
  findAll(@Query() articleListDto: ArticleListDto) {
    const pageNum = Number(articleListDto.pageNum) || 1;
    const pageSize = Number(articleListDto.pageSize) || 10;
    
    return this.articleService.findAll(pageNum, pageSize);
  }

  @Get('detail')
  findOne(@Query() idDto: IdDto) {
    // 参数校验
    const articleId = Number(idDto.id);
    if (!articleId || articleId <= 0) {
      throw new BadRequestException('Article id is invalid');
    }
    return this.articleService.findOne(articleId);
  }

  // 更新文章
  @Post('update')
  update(@Body() updateArticleDto: UpdateArticleDto) {
    // 参数校验
    const articleId = Number(updateArticleDto.id);
    if (!articleId) {
      return null
    }
    return this.articleService.update(updateArticleDto);
  }

  @Post('delete')
  remove(@Body() idDto: IdDto) {
    // 参数校验
    const articleId = Number(idDto.id);
    if (!articleId) {
      return null
    }
    return this.articleService.remove(articleId);
  }
}
