import { RentalPaymentCreateDto } from '../dto/rental-payment-create.dto';
import { RentalPaymentResponseDto } from '../dto/rental-payment-response.dto';

export interface RentalPaymentRepository {
  create(rentalPayment: RentalPaymentCreateDto): Promise<RentalPaymentResponseDto | null>;

  findAll(): Promise<RentalPaymentResponseDto[]>;

  findById(id: string): Promise<RentalPaymentResponseDto>;

  update(
    id: string,
    rentalPayment: RentalPaymentCreateDto,
  ): Promise<RentalPaymentResponseDto | null>;

  delete(id: string): Promise<boolean>;
}
