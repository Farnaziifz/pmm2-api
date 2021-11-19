import { HttpModule, Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
@Module({
  imports: [HttpModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
