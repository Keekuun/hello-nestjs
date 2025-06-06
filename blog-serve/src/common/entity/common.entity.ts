import {
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  VersionColumn,
} from 'typeorm';

// 注意：此处不要使用 @Entity 否则会创建 common 表
export abstract class Common {
  // 主键id
  @PrimaryGeneratedColumn()
  id: number;

  // 创建时间
  @CreateDateColumn()
  createTime: Date

  // 更新时间
  @UpdateDateColumn()
  updateTime: Date

  // 软删除
  @Column({
    default: false,
    select: false, // 不返回此字段
  })
  isDelete: boolean

  // 更新次数
  @VersionColumn({
    select: false, // 不返回此字段
    nullable: true,
  })
  version: number
}
