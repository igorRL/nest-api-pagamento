import { Injectable } from '@nestjs/common';
import { CreateBancobrasilBoletoDto } from './dto/create-bancobrasil-boleto.dto';
import { UpdateBancobrasilBoletoDto } from './dto/update-bancobrasil-boleto.dto';

@Injectable()
export class BancobrasilBoletosService {

  findOne(id: number) {
    return `This action returns a #${id} bancobrasilBoleto`;
  }

  findAllByExId(id: number) {
    return `This action returns all bancobrasilBoletos by client id filter #${id}`;
  }

  create(createBancobrasilBoletoDto: CreateBancobrasilBoletoDto) {
    return 'This action adds a new bancobrasilBoleto';
  }

  update(id: number, updateBancobrasilBoletoDto: UpdateBancobrasilBoletoDto) {
    return `This action updates a #${id} bancobrasilBoleto`;
  }

  remove(id: number) {
    return `This action removes a #${id} bancobrasilBoleto`;
  }
}
