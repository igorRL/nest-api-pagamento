import { Test, TestingModule } from '@nestjs/testing';
import { MetodosService } from './metodos.service';

describe('MetodosService', () => {
  let service: MetodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetodosService],
    }).compile();

    service = module.get<MetodosService>(MetodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
