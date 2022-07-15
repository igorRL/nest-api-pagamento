import { Test, TestingModule } from '@nestjs/testing';
import { BancobrasilBoletoRegistrosController } from './bancobrasil-boleto-registros.controller';
import { BancobrasilBoletoRegistrosService } from './bancobrasil-boleto-registros.service';

describe('BancobrasilBoletoRegistrosController', () => {
  let controller: BancobrasilBoletoRegistrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BancobrasilBoletoRegistrosController],
      providers: [BancobrasilBoletoRegistrosService],
    }).compile();

    controller = module.get<BancobrasilBoletoRegistrosController>(BancobrasilBoletoRegistrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
