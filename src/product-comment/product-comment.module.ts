import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCommentSchema } from './product-comment.schema';
import { ProductCommentService } from './product-comment.service';
import { ProductCommentController } from './product-comment.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductComment', schema: ProductCommentSchema },
    ]),
  ],
  providers: [ProductCommentService],
  controllers: [ProductCommentController],
})
export class ProductCommentModule {}
