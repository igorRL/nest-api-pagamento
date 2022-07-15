import { Injectable } from '@nestjs/common';
import { CreateInstituitionDto } from './dto/create-instituition.dto';
import { UpdateInstituitionDto } from './dto/update-instituition.dto';

@Injectable()
export class InstituitionsService {
  create(createInstituitionDto: CreateInstituitionDto) {
    return 'This action adds a new instituition';
  }

  findAll() {
    return `This action returns all instituitions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instituition`;
  }

  findAllByMethod(id: number){
    return `This action returns diff instituitions has #${id} method id`;
  }

  update(id: number, updateInstituitionDto: UpdateInstituitionDto) {
    return `This action updates a #${id} instituition`;
  }

  remove(id: number) {
    return `This action removes a #${id} instituition`;
  }
}
