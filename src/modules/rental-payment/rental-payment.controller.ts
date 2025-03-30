import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentalPaymentService } from './rental-payment.service';
import { RentalPaymentCreateDto } from './dto/rental-payment-create.dto';

@Controller('pagamentos')
export class RentalPaymentController {
  constructor(private readonly rentalPaymentService: RentalPaymentService) {}

  @Post()
  create(@Body() createRentalPaymentDto: RentalPaymentCreateDto) {
    return this.rentalPaymentService.create(createRentalPaymentDto);
  }

  @Get()
  findAll() {
    return this.rentalPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalPaymentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalPaymentDto: RentalPaymentCreateDto) {
    return this.rentalPaymentService.update(id, updateRentalPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalPaymentService.remove(id);
  }
}
