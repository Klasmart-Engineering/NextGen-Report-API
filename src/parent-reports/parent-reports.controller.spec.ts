import { Test, TestingModule } from '@nestjs/testing';
import { ParentReportsController } from './parent-reports.controller';
import { ParentReportsService } from './parent-reports.service';

describe('ParentReportsController', () => {
  let controller: ParentReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentReportsController],
      providers: [ParentReportsService],
    }).compile();

    controller = module.get<ParentReportsController>(ParentReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
