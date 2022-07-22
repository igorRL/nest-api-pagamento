import { Test, TestingModule } from '@nestjs/testing';
import { MetodosController } from './metodos.controller';
import { MetodosService } from './metodos.service';

describe('MetodosController', () => {
  let controller: MetodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodosController],
      providers: [MetodosService],
    }).compile();

    controller = module.get<MetodosController>(MetodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
