import { Injectable } from '@nestjs/common';
import { CreateMetodoDto } from './dto/create-metodo.dto';
import { UpdateMetodoDto } from './dto/update-metodo.dto';

@Injectable()
export class MetodosService {
  create(createMetodoDto: CreateMetodoDto) {
    return 'This action adds a new metodo';
  }

  findDiff() {
    return `This action returns all diff metodos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metodo`;
  }

  update(id: number, updateMetodoDto: UpdateMetodoDto) {
    return `This action updates a #${id} metodo`;
  }

  remove(id: number) {
    return `This action removes a #${id} metodo`;
  }
}
