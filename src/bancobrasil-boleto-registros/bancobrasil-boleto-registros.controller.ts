import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BancobrasilBoletoRegistrosService } from './bancobrasil-boleto-registros.service';
import { CreateBancobrasilBoletoRegistroDto } from './dto/create-bancobrasil-boleto-registro.dto';
import { UpdateBancobrasilBoletoRegistroDto } from './dto/update-bancobrasil-boleto-registro.dto';

@Controller('bancobrasil-boleto-registro')
export class BancobrasilBoletoRegistrosController {
  constructor(private readonly bancobrasilBoletoRegistrosService: BancobrasilBoletoRegistrosService) {}

  @Get('/id/:id')
  findOne(@Param('id') id: string) {
    return this.bancobrasilBoletoRegistrosService.findOne(+id);
  }

  @Get(':id')
  findAllByExId(@Param('id') id: string) {
    return this.bancobrasilBoletoRegistrosService.findAllByExId(+id);
  }

  @Post()
  create(@Body() createBancobrasilBoletoRegistroDto: CreateBancobrasilBoletoRegistroDto) {
    return this.bancobrasilBoletoRegistrosService.create(createBancobrasilBoletoRegistroDto);
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
