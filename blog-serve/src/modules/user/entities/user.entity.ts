import {Column, Entity} from "typeorm";
import {Common} from "@/common/entity/common.entity";

@Entity()
export class User extends Common {
  // 用户名
  @Column({type: 'varchar', length: 100, unique: true})
  username: string;

  // 密码
  @Column({type: 'varchar', length: 255})
  password: string;

  // 邮箱
  @Column({type: 'varchar', length: 255, unique: true})
  email: string;

  // 昵称
  @Column({type: 'varchar', length: 100, nullable: true})
  nickname: string;

  // 头像
  @Column({type: 'varchar', length: 255, nullable: true})
  avatar: string;

  // 用户角色
  @Column({type: 'simple-array', nullable: true})
  roles: string[];

  // 用户状态
  @Column({type: 'boolean', default: true})
  status: boolean;
}
