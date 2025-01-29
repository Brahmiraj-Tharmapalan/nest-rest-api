import { Test, TestingModule } from '@nestjs/testing';
import { EmploueesController } from './emplouees.controller';
import { EmploueesService } from './emplouees.service';

describe('EmploueesController', () => {
  let controller: EmploueesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmploueesController],
      providers: [EmploueesService],
    }).compile();

    controller = module.get<EmploueesController>(EmploueesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
