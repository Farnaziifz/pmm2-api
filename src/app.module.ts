import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { BlogTagModule } from './blog-tags/blog-tag.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    BlogModule,
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useFindAndModify: false,
    }),
    BlogCategoryModule,
    BlogTagModule,
    UserModule,
    SharedModule,
    AuthModule,
    TeamsModule,
  ],
})
export class AppModule {}
