import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogTagSchema } from './blog-tag.schema';
import { BlogTagsService } from './blog-tags.service';
import { BlogTagsController } from './blog-tags.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BlogTag', schema: BlogTagSchema }]),
  ],
  controllers: [BlogTagsController],
  providers: [BlogTagsService],
})
export class BlogTagModule {}
