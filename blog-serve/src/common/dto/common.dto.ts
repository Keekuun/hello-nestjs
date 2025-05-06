import {IdDto} from "./id.dto";
import {Column, CreateDateColumn, UpdateDateColumn, VersionColumn} from "typeorm";

export class CommonDto extends IdDto {
  // 创建时间
  @CreateDateColumn()
  readonly createTime: Date;

  // 更新时间
  @UpdateDateColumn()
  readonly updateTime: Date;

  // 是否删除
  @Column({type: 'boolean', default: false})
  isDeleted: boolean;

  // 版本控制
  @VersionColumn()
  version: number;
}
