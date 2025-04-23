import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn} from "typeorm";

@Entity()
export class Article {
  // 文章id
  @PrimaryGeneratedColumn() // 自增id
  id: number;

  // 文章标题
  @Column({type: 'varchar', length: 500})
  title: string;

  // 文章描述
  @Column('text')
  description: string;

  // 文章内容
  @Column('text')
  content: string;

  // 文章作者
  @Column('varchar')
  author: string;

  // 创建时间
  @CreateDateColumn({name: 'createTime'})
  createTime: Date;

  // 更新时间
  @UpdateDateColumn({name: 'updateTime'})
  updateTime: Date;

  // 是否删除
  @Column({type: 'boolean', default: false})
  isDeleted: boolean;

  // 版本控制
  @VersionColumn()
  version: number;

  // 文章标签
  @Column('simple-array', { nullable: true })
  tags: string[];
}
