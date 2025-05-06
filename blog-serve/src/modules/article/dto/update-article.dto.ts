import { CreateArticleDto } from './create-article.dto';
import {IdDto} from "../../../common/dto/id.dto";

export class UpdateArticleDto implements IdDto, CreateArticleDto {
    title: string;
    description: string;
    content: string;
    author: string;
    tags?: string[] | undefined;
    id: number;
}
