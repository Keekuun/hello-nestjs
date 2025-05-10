import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @IsNotEmpty({ message: '文章ID不能为空' })
  @IsNumber({}, { message: '文章ID必须是数字' })
  @Min(1, { message: '文章ID必须大于0' })
  id: number;
}
