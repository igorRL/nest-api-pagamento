import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstituitionsService } from './instituitions.service';
import { CreateInstituitionDto } from './dto/create-instituition.dto';
import { UpdateInstituitionDto } from './dto/update-instituition.dto';

@Controller('instituicao')
export class InstituitionsController {
  constructor(private readonly instituitionsService: InstituitionsService) {}

  @Post()
  create(@Body() createInstituitionDto: CreateInstituitionDto) {
    return this.instituitionsService.create(createInstituitionDto);
  }

  @Get()
  findAll() {
    return this.instituitionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instituitionsService.findOne(+id);
  }

  @Get('/metodo/:id')
  findDiffByMethod(@Param('id') id: string) {
    return this.instituitionsService.findDiffByMethod(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstituitionDto: UpdateInstituitionDto) {
    return this.instituitionsService.update(+id, updateInstituitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instituitionsService.remove(+id);
  }
}
