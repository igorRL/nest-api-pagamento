import { Module } from '@nestjs/common';
import { BancobrasilBoletoRegistrosService } from './bancobrasil-boleto-registros.service';
import { BancobrasilBoletoRegistrosController } from './bancobrasil-boleto-registros.controller';

@Module({
  controllers: [BancobrasilBoletoRegistrosController],
  providers: [BancobrasilBoletoRegistrosService]
})
export class BancobrasilBoletoRegistrosModule {}
