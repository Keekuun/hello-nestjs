export class Article {
  // 文章id
  id: number;
  // 文章标题
  title: string;
  // 文章描述
  description: string;
  // 文章内容
  content: string;
  // 文章作者
  author: string;
  // 创建时间
  createTime: Date;
  // 更新时间
  updateTime: Date;
  // 是否删除
  isDeleted: boolean;
  // 文章便签
  tags: string[];

  static fromJson(json: any): Article {
    const article = new Article();
    article.id = json.id;
    article.title = json.title;
    article.description = json.description;
    article.content = json.content;
    article.author = json.author;
    article.createTime = json.createTime;
    article.updateTime = json.updateTime;
    article.isDeleted = json.isDeleted;
    article.tags = json.tags;
    return article;
  }
}
