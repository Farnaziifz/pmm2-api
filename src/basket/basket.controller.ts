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
  Put,
} from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDTO } from './dto/create-basket.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('basket')
export class BasketController {
  constructor(private basketService: BasketService) {}

  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  async getUserBasket(@Res() res, @Param('id') id) {
    const data = await this.basketService.getUserBasket(id);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json(data);
  }

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  async createBasket(@Res() res, @Body() createBasketDTO: CreateBasketDTO) {
    const data = await this.basketService.createBasket(createBasketDTO);
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data added succefuly',
      data,
    });
  }

  @Put('/update/:id')
  async updateBasket(
    @Res() res,
    @Param('id') id,
    @Body() createBasketDTO: CreateBasketDTO,
  ) {
    const data = await this.basketService.updateBasket(id, createBasketDTO);
    if (!data) throw new NotFoundException('data does not exist!');
    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: 'data has been successfully updated',
      data,
    });
  }
}
