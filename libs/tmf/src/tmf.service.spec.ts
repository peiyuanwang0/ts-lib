import { Test, TestingModule } from '@nestjs/testing';
import { TmfService } from './tmf.service';

describe('TmfService', () => {
  let service: TmfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TmfService],
    }).compile();

    service = module.get<TmfService>(TmfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
