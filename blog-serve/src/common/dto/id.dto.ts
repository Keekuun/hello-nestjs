import {IsNotEmpty, Matches} from "class-validator";
import {REGEX_POSITIVE_INTEGER} from "@/utils/regex.util";

export class IdDto {
  // 主键id
  @IsNotEmpty({message: 'id 不能为空'})
  @Matches(REGEX_POSITIVE_INTEGER, {message: '请输入有效 id'})
  readonly id: number
}
