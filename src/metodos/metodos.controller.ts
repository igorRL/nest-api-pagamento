import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodosService } from './metodos.service';
import { CreateMetodoDto } from './dto/create-metodo.dto';
import { UpdateMetodoDto } from './dto/update-metodo.dto';

@Controller('metodo')
export class MetodosController {
  constructor(private readonly metodosService: MetodosService) {}
  
  @Get('/distinto/')
  findDistinct() {
    return this.metodosService.findDistinct();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metodosService.findOne(+id);
  }

  @Post()
  create(@Body() createMetodoDto: CreateMetodoDto) {
    return this.metodosService.create(createMetodoDto);
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
