import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsController } from './teams.controller';
import { TeamsSchema } from './teams.model';
import { TeamsService } from './teams.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: TeamsSchema }])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
