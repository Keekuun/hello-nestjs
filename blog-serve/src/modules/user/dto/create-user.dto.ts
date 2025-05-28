export class CreateUserDto {
  /**
   * 用户名
   */
  readonly username: string;
  /**
   * 密码
   */
  readonly password: string;
  /**
   * 邮箱
   */
  readonly email: string;
  /**
   * 昵称
   */
  readonly nickname?: string;
  /**
   * 头像
   */
  readonly avatar?: string;
}
