import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateArticleDto} from './dto/create-article.dto';
import {UpdateArticleDto} from './dto/update-article.dto';
import {Article} from './entities/article.entity';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {
  }

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

  async findOne(id: number) {
    const article = await this.articleRepository.createQueryBuilder('article').where('article.id = :id', {id}).getOne();
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return article;
  }

  async update(updateArticleDto: UpdateArticleDto) {
    const article = await this.articleRepository.findOneBy({id: updateArticleDto.id});
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    Object.assign(article, updateArticleDto);
    return this.articleRepository.save(article);
  }

  remove(id: number) {
    return this.articleRepository.delete(id);
  }
}
