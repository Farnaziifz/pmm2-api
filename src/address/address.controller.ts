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
import { AddressService } from './address.service';
import { CreateAddressDTO } from './dto/create-address.dto';
@Controller('address')
export class AddressController {
  constructor(private AddresService: AddressService) {}

  @Get()
  async getAllAddress(@Res() res) {
    const data = await this.AddresService.getAllAddress();
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Post('/create')
  async createAddress(@Res() res, @Body() createAddressDTO: CreateAddressDTO) {
    const data = await this.AddresService.createAddress(createAddressDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }
  @Get('byUser/:id')
  async getAddressByUser(@Res() res, @Param('id') id) {
    const data = await this.AddresService.getAddressByUser(id);
    return res.status(HttpStatus.OK).json({ data, statusCode: 200 });
  }

  @Delete('/delete/:id')
  async deleteAddress(@Res() res, @Param('id') id) {
    const data = await this.AddresService.deletAddress(id);
    if (!data) throw new NotFoundException('data does not exist');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been deleted',
      data,
    });
  }
}
