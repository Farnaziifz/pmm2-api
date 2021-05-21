import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Teams } from './teams.interface';
import { CreateTeamsDTO } from './dto/create-teams.dto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel('Teams')
    private readonly teamsModel: Model<Teams>,
  ) {}

  async getAllTeams(): Promise<Teams[]> {
    const data = await this.teamsModel.find().exec();
    return data;
  }

  async createTeams(createTeamsDTO: CreateTeamsDTO): Promise<Teams> {
    const data = await new this.teamsModel(createTeamsDTO);
    return data.save();
  }

  async getTeamssById(id): Promise<Teams> {
    const data = await this.teamsModel.findById(id).exec();
    return data;
  }

  async deleteTeams(id): Promise<any> {
    const data = await this.teamsModel.findByIdAndRemove(id);
    return data;
  }

  async updateProduct(id, createTeamsDTO: CreateTeamsDTO): Promise<Teams> {
    const data = await this.teamsModel.findByIdAndUpdate(id, createTeamsDTO, {
      new: true,
    });

    return data;
  }
}
