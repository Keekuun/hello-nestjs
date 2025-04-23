import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { getRepositoryToken } from "@nestjs/typeorm";
import { Article } from "./entities/article.entity";
import { Repository } from "typeorm";

describe('ArticleController', () => {
  let controller: ArticleController;
  let service: ArticleService;
  let repository: Repository<Article>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        ArticleService,
        {
          provide: getRepositoryToken(Article),
          useClass: Repository<Article>,
        },
      ],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
    service = module.get<ArticleService>(ArticleService);
    repository = module.get<Repository<Article>>(getRepositoryToken(Article));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of articles', async () => {
      const mockArticles = [{ id: 1, title: 'Test Article' }];
      expect(await controller.findAll()).toEqual(mockArticles);
    });
  });

  describe('create', () => {
    it('should create a new article', async () => {
      const newArticle = { title: 'New Article', description: 'Description', content: 'Content', author: 'Author' };
      const result = { id: 1, ...newArticle };
      expect(await controller.create(newArticle)).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single article', async () => {
      const articleId = 1;
      const result = { id: articleId, title: 'Test Article' };
      expect(await controller.findOne(articleId)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should remove an article', async () => {
      const articleId = 1;
      const result = { id: articleId, title: 'Test Article' };
      expect(await controller.remove(articleId)).toEqual(result);
    });
  });
});
