import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodosService } from './metodos.service';
import { CreateMetodoDto } from './dto/create-metodo.dto';
import { UpdateMetodoDto } from './dto/update-metodo.dto';

@Controller('metodos')
export class MetodosController {
  constructor(private readonly metodosService: MetodosService) {}

  @Post()
  create(@Body() createMetodoDto: CreateMetodoDto) {
    return this.metodosService.create(createMetodoDto);
  }

  @Get()
  findDiff() {
    return this.metodosService.findDiff();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metodosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetodoDto: UpdateMetodoDto) {
    return this.metodosService.update(+id, updateMetodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metodosService.remove(+id);
  }
}
