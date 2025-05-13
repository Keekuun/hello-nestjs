import {Column, Entity} from "typeorm";
import {Common} from "@/common/entity/common.entity";

// @Entity 会将这个类映射为数据库表
@Entity()
export class Article extends Common {
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
  @Column({type: 'varchar', length: 100})
  author: string;

  // 文章标签
  @Column('simple-array', {nullable: true})
  tags: string[];
}
