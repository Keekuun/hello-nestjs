import {IdDto} from "../../../common/dto/id.dto";
import {ArticleDto} from "./article.dto";

export class UpdateArticleDto implements IdDto, ArticleDto {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  tags?: string[] | undefined;
}
