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
import { PartnersService } from './partners.service';
import { CreatePartnersDTO } from './dto/create-partners.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('Partners')
export class PartnersController {
  constructor(private partnersService: PartnersService) {}

  @Get()
  async getAllData(@Res() res) {
    const data = await this.partnersService.getAllPartners();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  async createData(@Res() res, @Body() createPartnersDTO: CreatePartnersDTO) {
    const data = await this.partnersService.createPartners(createPartnersDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }

  @Get('/:id')
  async getData(@Res() res, @Param('id') id) {
    const data = await this.partnersService.getPartnerById(id);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json(data);
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteData(@Res() res, @Param('id') id) {
    const data = await this.partnersService.deletePartner(id);
    if (!data) throw new NotFoundException('data does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been deleted',
      data,
    });
  }

  @Put('/update/:id')
  async updateData(
    @Res() res,
    @Param('id') id,
    @Body() createPartnersDTO: CreatePartnersDTO,
  ) {
    const data = await this.partnersService.updatePartner(
      id,
      createPartnersDTO,
    );
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been successfully updated',
      data,
    });
  }
}
