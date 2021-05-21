import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
  NotFoundException,
  UseGuards,
  Delete,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TeamsService } from './teams.service';
import { CreateTeamsDTO } from './dto/create-teams.dto';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  async getAllTeams(@Res() res) {
    const data = await this.teamsService.getAllTeams();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Get('/:id')
  async getTeams(@Res() res, @Param('id') id) {
    const data = await this.teamsService.getTeamssById(id);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  async createProduct(@Res() res, @Body() createTeamsDTO: CreateTeamsDTO) {
    const data = await this.teamsService.createTeams(createTeamsDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteTeam(@Res() res, @Param('id') id) {
    const data = await this.teamsService.deleteTeams(id);
    if (!data) throw new NotFoundException('data does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been deleted',
      data,
    });
  }

  @Put('/update/:id')
  async updateProduct(
    @Res() res,
    @Param('id') id,
    @Body() createTeamsDTO: CreateTeamsDTO,
  ) {
    const data = await this.teamsService.updateProduct(id, createTeamsDTO);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been successfully updated',
      data,
    });
  }
}
