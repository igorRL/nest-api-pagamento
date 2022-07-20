import { Test, TestingModule } from '@nestjs/testing';
import { InstituitionsService } from './instituitions.service';

describe('InstituitionsService', () => {
  let service: InstituitionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstituitionsService],
    }).compile();

    service = module.get<InstituitionsService>(InstituitionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
