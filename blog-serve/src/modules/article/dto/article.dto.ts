import { IsNotEmpty } from "class-validator";

export class ArticleDto {
  /**
   * 文章标题
   */
  @IsNotEmpty({ message: '文章标题不能为空' })
  readonly title: string;
  /**
   * 文章描述
   */
  @IsNotEmpty({ message: '文章描述不能为空' })
  readonly description: string;
  /**
   * 文章内容
   */
  @IsNotEmpty({ message: '文章内容不能为空' })
  readonly content: string;
  /**
   * 文章作者
   */
  @IsNotEmpty({ message: '文章作者不能为空' })
  readonly author: string;
  /**
   * 文章标签
   */
  readonly tags?: string[];
}
