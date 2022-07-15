import { Injectable } from '@nestjs/common';
import { CreateBancobrasilBoletoRegistroDto } from './dto/create-bancobrasil-boleto-registro.dto';
import { UpdateBancobrasilBoletoRegistroDto } from './dto/update-bancobrasil-boleto-registro.dto';

@Injectable()
export class BancobrasilBoletoRegistrosService {
  create(createBancobrasilBoletoRegistroDto: CreateBancobrasilBoletoRegistroDto) {
    return 'This action adds a new bancobrasilBoletoRegistro';
  }

  findAll() {
    return `This action returns all bancobrasilBoletoRegistros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bancobrasilBoletoRegistro`;
  }

  update(id: number, updateBancobrasilBoletoRegistroDto: UpdateBancobrasilBoletoRegistroDto) {
    return `This action updates a #${id} bancobrasilBoletoRegistro`;
  }

  remove(id: number) {
    return `This action removes a #${id} bancobrasilBoletoRegistro`;
  }
}
