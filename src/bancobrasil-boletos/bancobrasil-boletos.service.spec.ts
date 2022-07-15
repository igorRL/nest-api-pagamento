import { Test, TestingModule } from '@nestjs/testing';
import { BancobrasilBoletosService } from './bancobrasil-boletos.service';

describe('BancobrasilBoletosService', () => {
  let service: BancobrasilBoletosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BancobrasilBoletosService],
    }).compile();

    service = module.get<BancobrasilBoletosService>(BancobrasilBoletosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
