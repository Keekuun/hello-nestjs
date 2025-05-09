import {IdDto} from "./id.dto";

export class CommonDto extends IdDto {
  // 创建时间
  readonly createTime: Date;

  // 更新时间
  readonly updateTime: Date;

  // 是否删除
  isDeleted: boolean;

  // 版本控制
  version: number;
}
