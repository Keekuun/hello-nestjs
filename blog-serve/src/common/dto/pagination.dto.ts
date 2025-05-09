import {IsOptional, Matches} from "class-validator";
import {REGEX_POSITIVE_INTEGER} from "@/utils/regex.util";

export class PaginationDto {
  // 当前页码
  @IsOptional()
  @Matches(REGEX_POSITIVE_INTEGER, {message: 'pageNum 不能小于 0'})
  pageNum: number;

  // 每页数量
  @IsOptional()
  @Matches(REGEX_POSITIVE_INTEGER, {message: 'pageSize 不能小于 0'})
  pageSize: number;

  // 总页数
  pageTotal: number;

  // 总数量
  total: number;
}
