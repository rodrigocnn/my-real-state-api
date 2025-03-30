import { RentalContractCreateDto } from '../dto/rental-contract-create.dto';
import { RentalContractResponseDto } from '../dto/rental-contract-response.dto';

export interface RentalContractRepository {
  create(rentalContract: RentalContractCreateDto): Promise<RentalContractResponseDto | null>;
  findAll(): Promise<RentalContractResponseDto[]>;
  findById(id: string): Promise<RentalContractResponseDto>;
  update(
    id: string,
    rentalContract: RentalContractCreateDto,
  ): Promise<RentalContractResponseDto | null>;
  delete(id: string): Promise<boolean>;
}
