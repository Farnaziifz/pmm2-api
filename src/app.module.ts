import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    BlogModule,
    MongooseModule.forRoot('mongodb://localhost/mokamel_db'),
  ],
})
export class AppModule {}
