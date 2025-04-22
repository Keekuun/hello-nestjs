import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  list: Article[] = [];
  constructor() {
    this.list.push(
      Article.fromJson({
        id: 1,
        title: '标题1',
        description: '描述1',
        content: '内容1',
        createTime: new Date(),
        updateTime: new Date(),
        author: 'admin',
        tags: ['标签1', '标签2'],
      }),
    );
  }
  create(createArticleDto: CreateArticleDto) {
    const article = Article.fromJson({
      id: this.list.length + 1,
      title: createArticleDto.title,
      description: createArticleDto.description,
      content: createArticleDto.content,
      createTime: new Date(),
      updateTime: new Date(),
      author: 'admin',
      tags: [],
    });
    this.list.push(article);
    return article;
  }

  findAll() {
    return this.list;
  }

  findOne(id: number) {
    return this.list.find((item) => item.id === id);
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    const article = this.findOne(id);
    if (article) {
      article.title = updateArticleDto.title ?? article.title;
      article.description = updateArticleDto.description ?? article.description;
      article.content = updateArticleDto.content ?? article.content;
      article.updateTime = new Date();
      return article;
    } else {
      return null;
    }
  }

  remove(id: number) {
    const article = this.findOne(id);
    if (article) {
      const index = this.list.findIndex((item) => item.id === id);
      this.list.splice(index, 1);
      return article;
    } else {
      return null;
    }
  }
}
