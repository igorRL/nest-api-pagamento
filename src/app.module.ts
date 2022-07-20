import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstituitionsModule } from './instituitions/instituitions.module';
import { MetodosModule } from './metodos/metodos.module';
import { AccountsModule } from './accounts/accounts.module';
import { BancobrasilBoletosModule } from './bancobrasil-boletos/bancobrasil-boletos.module';
import { BancobrasilBoletoRegistrosModule } from './bancobrasil-boleto-registros/bancobrasil-boleto-registros.module';

@Module({
  imports: 
  [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
        // @ts-ignore
        type: process.env.TYPEORM_CONNECTION,
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        entities: [process.env.TYPEORM_ENTITIES],
        migration: [process.env.TYPEORM_MIGRATIONS],
        autoLoadEntities: true,
        keepConnectionAlive: true,
        debug: true
    }),
    InstituitionsModule,
    MetodosModule,
    AccountsModule,
    BancobrasilBoletosModule,
    BancobrasilBoletoRegistrosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
