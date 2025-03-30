export class RentalPaymentResponseDto {
  readonly id: string;
  readonly rentalContractId: string;
  readonly dueDate: Date;
  readonly paymentDate?: Date | null;
  readonly amount: number;
  readonly status: 'pendente' | 'pago' | 'atrasado';
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
