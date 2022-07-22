import { Injectable } from '@nestjs/common';
import { CreateBancobrasilBoletoRegistroDto } from './dto/create-bancobrasil-boleto-registro.dto';
import { UpdateBancobrasilBoletoRegistroDto } from './dto/update-bancobrasil-boleto-registro.dto';

@Injectable()
export class BancobrasilBoletoRegistrosService {

  findOne(id: number) {
    return `This action returns a #${id} bancobrasilBoletoRegistro`;
  }

  findAllByExId(id: number) {
    return `This action returns all bancobrasilBoletoRegistros by id_ex #${id} filter`;
  }

  create(createBancobrasilBoletoRegistroDto: CreateBancobrasilBoletoRegistroDto) {
    return 'This action adds a new bancobrasilBoletoRegistro';
  }

  update(id: number, updateBancobrasilBoletoRegistroDto: UpdateBancobrasilBoletoRegistroDto) {
    return `This action updates a #${id} bancobrasilBoletoRegistro`;
  }

  remove(id: number) {
    return `This action removes a #${id} bancobrasilBoletoRegistro`;
  }
}
