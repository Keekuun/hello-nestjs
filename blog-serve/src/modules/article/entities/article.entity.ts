import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

  // 文章标签
  @Column('simple-array', { nullable: true })
  tags: string[];
}
