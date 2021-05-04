import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogCommentSchema } from './blog-commet.schema';
import { BlogCommentService } from './blog-comment.service';
import { BlogCommentController } from './blog-comment.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BlogComment', schema: BlogCommentSchema },
    ]),
  ],
  providers: [BlogCommentService],
  controllers: [BlogCommentController],
})
export class BlogCommentModule {}
