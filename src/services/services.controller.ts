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
import { ServicesService } from './services.service';
import { CreateServicesDTO } from './dto/create-services.dto';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  async getAllServices(@Res() res) {
    const data = await this.servicesService.getAllServices();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Get('/:id')
  async getService(@Res() res, @Param('id') id) {
    const data = await this.servicesService.getServicesById(id);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  async createProduct(
    @Res() res,
    @Body() createServicesDTO: CreateServicesDTO,
  ) {
    const data = await this.servicesService.createProducts(createServicesDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteCat(@Res() res, @Param('id') id) {
    const data = await this.servicesService.deleteServices(id);
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
    @Body() createServicesDTO: CreateServicesDTO,
  ) {
    const data = await this.servicesService.updateProduct(
      id,
      createServicesDTO,
    );
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been successfully updated',
      data,
    });
  }
}
