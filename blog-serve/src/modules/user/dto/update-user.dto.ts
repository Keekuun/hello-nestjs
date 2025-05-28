import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  /**
   * 用户角色
   */
  readonly roles?: string[];
  /**
   * 用户状态
   */
  readonly status?: boolean;
}
