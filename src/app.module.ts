import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstituitionsModule } from './instituitions/instituitions.module';
import { MetodosModule } from './metodos/metodos.module';
import { AccountsModule } from './accounts/accounts.module';
import { BancobrasilBoletosModule } from './bancobrasil-boletos/bancobrasil-boletos.module';
import { BancobrasilBoletoRegistrosModule } from './bancobrasil-boleto-registros/bancobrasil-boleto-registros.module';

@Module({
  imports: [InstituitionsModule, MetodosModule, AccountsModule,BancobrasilBoletosModule, BancobrasilBoletoRegistrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
