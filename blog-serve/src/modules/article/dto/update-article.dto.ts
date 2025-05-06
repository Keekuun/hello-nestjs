import {IdDto} from "../../../common/dto/id.dto";
import {ArticleDto} from "./article.dto";
import {IsInt} from "class-validator";

export class UpdateArticleDto implements IdDto, ArticleDto {
  /**
   * 文章ID
   */
  @IsInt()
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  tags?: string[] | undefined;
}
