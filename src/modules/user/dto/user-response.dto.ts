export class UserResponseDto {
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
