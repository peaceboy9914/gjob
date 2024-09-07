import { Test, TestingModule } from '@nestjs/testing';
import { GjobService } from './gjob.service';

describe('GjobService', () => {
  let service: GjobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GjobService],
    }).compile();

    service = module.get<GjobService>(GjobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
