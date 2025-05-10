import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleListDto } from './dto/article-list.dto';
import { IdDto } from '../../common/dto/id.dto';
import { BadRequestException } from '@nestjs/common';

describe('ArticleController', () => {
  let controller: ArticleController;
  let service: ArticleService;

  // 模拟 ArticleService
  const mockArticleService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        {
          provide: ArticleService,
          useValue: mockArticleService,
        },
      ],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
    service = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an article', async () => {
      const createArticleDto: CreateArticleDto = {
        title: '测试文章',
        content: '测试内容',
        description: '测试描述',
        author: 'jeek',
        tags: ['测试', '文章']
      };
      const expectedResult = { id: 1, ...createArticleDto };
      
      mockArticleService.create.mockResolvedValue(expectedResult);
      
      const result = await controller.create(createArticleDto);
      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createArticleDto);
    });

    it('should validate required fields', async () => {
      const invalidDto = {
        content: '测试内容'
        // missing required fields
      };
      
      mockArticleService.create.mockRejectedValue(new BadRequestException('Validation failed'));
      
      await expect(controller.create(invalidDto as CreateArticleDto))
        .rejects
        .toThrow(BadRequestException);
    });

    it('should handle special characters', async () => {
      const dtoWithSpecialChars: CreateArticleDto = {
        title: '测试文章!@#$%^&*()',
        content: '<script>alert("test")</script>',
        description: '包含特殊字符的描述',
        author: 'test',
        tags: ['测试', '文章']
      };
      
      mockArticleService.create.mockResolvedValue({ 
        id: 1, 
        ...dtoWithSpecialChars 
      });
      
      const result = await controller.create(dtoWithSpecialChars);
      expect(result).toBeDefined();
      expect(service.create).toHaveBeenCalledWith(dtoWithSpecialChars);
    });
  });

  describe('findAll', () => {
    it('should return paginated articles', async () => {
      const articleListDto: ArticleListDto = {
        pageNum: 1,
        pageSize: 10
      };
      const expectedResult = {
        items: [],
        total: 0,
        pageNum: 1,
        pageSize: 10,
        pageTotal: 0
      };

      mockArticleService.findAll.mockResolvedValue(expectedResult);

      const result = await controller.findAll(articleListDto);
      expect(result).toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalledWith(1, 10);
    });
  });

  describe('findOne', () => {
    it('should return an article', async () => {
      const idDto: IdDto = { id: 1 };
      const expectedResult = {
        id: 1,
        title: '测试文章',
        content: '测试内容'
      };

      mockArticleService.findOne.mockResolvedValue(expectedResult);

      const result = await controller.findOne(idDto);
      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });

    it('should throw BadRequestException when id is invalid', async () => {
      const idDto: IdDto = { id: -1 };
      
      const errorResponse = {
        error: "Bad Request",
        message: "Article id is invalid",
        statusCode: 400,
      };
      
      mockArticleService.findOne.mockRejectedValue(new BadRequestException(errorResponse));
      
      try {
        await controller.findOne(idDto);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.response).toEqual(errorResponse);
      }
    });
  });

  describe('update', () => {
    it('should update an article with all fields', async () => {
      const updateArticleDto: UpdateArticleDto = {
        id: 1,
        title: '更新后的文章',
        content: '更新后的内容',
        description: '更新后的描述',
        author: '更新后的作者',
        tags: ['新标签1', '新标签2']
      };
      const expectedResult = { ...updateArticleDto };
    
      mockArticleService.update.mockResolvedValue(expectedResult);
    
      const result = await controller.update(updateArticleDto);
      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(updateArticleDto);
    });
    
    it('should update an article with partial fields', async () => {
      const updateArticleDto: UpdateArticleDto = {
        id: 1,
        title: '只更新标题'
      };
      const expectedResult = { ...updateArticleDto };
    
      mockArticleService.update.mockResolvedValue(expectedResult);
    
      const result = await controller.update(updateArticleDto);
      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(updateArticleDto);
    });
    
    it('should return null when id is invalid', async () => {
      const updateArticleDto: UpdateArticleDto = {
        id: 0,
        title: '更新后的文章'
      };
    
      const result = await controller.update(updateArticleDto);
      expect(result).toBeNull();
    });
  });

  describe('remove', () => {
    it('should remove an article', async () => {
      const idDto: IdDto = { id: 1 };
      const expectedResult = { id: 1 };

      mockArticleService.remove.mockResolvedValue(expectedResult);

      const result = await controller.remove(idDto);
      expect(result).toEqual(expectedResult);
      expect(service.remove).toHaveBeenCalledWith(1);
    });

    it('should return null when id is invalid', async () => {
      const idDto: IdDto = { id: 0 };

      const result = await controller.remove(idDto);
      expect(result).toBeNull();
    });
  });
});
