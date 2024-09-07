import { Test, TestingModule } from '@nestjs/testing';
import { GjobController } from './gjob.controller';

describe('GjobController', () => {
  let controller: GjobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GjobController],
    }).compile();

    controller = module.get<GjobController>(GjobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
