export class ArticleDto {
  /**
   * 文章标题
   */
  title: string;
  /**
   * 文章描述
   */
  description: string;
  /**
   * 文章内容
   */
  content: string;
  /**
   * 文章作者
   */
  author: string;
  /**
   * 文章标签
   */
  tags?: string[];
}
