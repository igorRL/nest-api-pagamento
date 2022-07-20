import { Test, TestingModule } from '@nestjs/testing';
import { BancobrasilBoletoRegistrosService } from './bancobrasil-boleto-registros.service';

describe('BancobrasilBoletoRegistrosService', () => {
  let service: BancobrasilBoletoRegistrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BancobrasilBoletoRegistrosService],
    }).compile();

    service = module.get<BancobrasilBoletoRegistrosService>(BancobrasilBoletoRegistrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
