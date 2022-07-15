import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BancobrasilBoletosService } from './bancobrasil-boletos.service';
import { CreateBancobrasilBoletoDto } from './dto/create-bancobrasil-boleto.dto';
import { UpdateBancobrasilBoletoDto } from './dto/update-bancobrasil-boleto.dto';

@Controller('bancobrasil-boleto')
export class BancobrasilBoletosController {
  constructor(private readonly bancobrasilBoletosService: BancobrasilBoletosService) {}

  @Post()
  create(@Body() createBancobrasilBoletoDto: CreateBancobrasilBoletoDto) {
    return this.bancobrasilBoletosService.create(createBancobrasilBoletoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bancobrasilBoletosService.findOne(+id);
  }

  @Get('/cliente/:id')
  findAll(@Param('id') id: string) {
    return this.bancobrasilBoletosService.findAll(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBancobrasilBoletoDto: UpdateBancobrasilBoletoDto) {
    return this.bancobrasilBoletosService.update(+id, updateBancobrasilBoletoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bancobrasilBoletosService.remove(+id);
  }
}
