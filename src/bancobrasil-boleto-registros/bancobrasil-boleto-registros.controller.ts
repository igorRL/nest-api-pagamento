import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BancobrasilBoletoRegistrosService } from './bancobrasil-boleto-registros.service';
import { CreateBancobrasilBoletoRegistroDto } from './dto/create-bancobrasil-boleto-registro.dto';
import { UpdateBancobrasilBoletoRegistroDto } from './dto/update-bancobrasil-boleto-registro.dto';

@Controller('bancobrasil-boleto-registros')
export class BancobrasilBoletoRegistrosController {
  constructor(private readonly bancobrasilBoletoRegistrosService: BancobrasilBoletoRegistrosService) {}

  @Post()
  create(@Body() createBancobrasilBoletoRegistroDto: CreateBancobrasilBoletoRegistroDto) {
    return this.bancobrasilBoletoRegistrosService.create(createBancobrasilBoletoRegistroDto);
  }

  @Get()
  findAll() {
    return this.bancobrasilBoletoRegistrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bancobrasilBoletoRegistrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBancobrasilBoletoRegistroDto: UpdateBancobrasilBoletoRegistroDto) {
    return this.bancobrasilBoletoRegistrosService.update(+id, updateBancobrasilBoletoRegistroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bancobrasilBoletoRegistrosService.remove(+id);
  }
}
