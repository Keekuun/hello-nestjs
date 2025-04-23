import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}
  create(createArticleDto: CreateArticleDto): Promise<Article> {
    const article = new Article();
    article.title = createArticleDto.title;
    article.description = createArticleDto.description;
    article.content = createArticleDto.content;
    article.author = createArticleDto.author;
    article.tags = createArticleDto.tags || [];
    return this.articleRepository.save(article);
  }

  findAll() {
    return this.articleRepository.find();
  }

  findOne(id: number) {
    return this.articleRepository.findOneBy({id});
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.articleRepository.delete(id);
  }
}
