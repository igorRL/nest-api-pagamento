import { Module } from '@nestjs/common';
import { BancobrasilBoletosService } from './bancobrasil-boletos.service';
import { BancobrasilBoletosController } from './bancobrasil-boletos.controller';

@Module({
  controllers: [BancobrasilBoletosController],
  providers: [BancobrasilBoletosService]
})
export class BancobrasilBoletosModule {}
