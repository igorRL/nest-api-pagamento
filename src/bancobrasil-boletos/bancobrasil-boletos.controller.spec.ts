import { Test, TestingModule } from '@nestjs/testing';
import { BancobrasilBoletosController } from './bancobrasil-boletos.controller';
import { BancobrasilBoletosService } from './bancobrasil-boletos.service';

describe('BancobrasilBoletosController', () => {
  let controller: BancobrasilBoletosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BancobrasilBoletosController],
      providers: [BancobrasilBoletosService],
    }).compile();

    controller = module.get<BancobrasilBoletosController>(BancobrasilBoletosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
