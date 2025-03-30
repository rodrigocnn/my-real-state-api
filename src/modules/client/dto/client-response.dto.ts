export class ClientResponseDto {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly cpf: string;
  readonly phone?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
