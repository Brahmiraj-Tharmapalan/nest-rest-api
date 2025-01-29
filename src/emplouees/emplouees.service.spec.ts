import { Test, TestingModule } from '@nestjs/testing';
import { EmploueesService } from './emplouees.service';

describe('EmploueesService', () => {
  let service: EmploueesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmploueesService],
    }).compile();

    service = module.get<EmploueesService>(EmploueesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
