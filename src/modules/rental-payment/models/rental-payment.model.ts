import { RentPaymentStatus } from './rent-payment-status.enum';

export class RentPayment {
  id: string;
  rentalContractId: string;
  dueDate: Date;
  paymentDate?: Date;
  amount: number;
  status: RentPaymentStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
