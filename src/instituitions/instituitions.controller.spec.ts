import { Test, TestingModule } from '@nestjs/testing';
import { InstituitionsController } from './instituitions.controller';
import { InstituitionsService } from './instituitions.service';

describe('InstituitionsController', () => {
  let controller: InstituitionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstituitionsController],
      providers: [InstituitionsService],
    }).compile();

    controller = module.get<InstituitionsController>(InstituitionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
