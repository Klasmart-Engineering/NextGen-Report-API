import { Test, TestingModule } from '@nestjs/testing';
import { ParentReportsService } from './parent-reports.service';

describe('ParentReportsService', () => {
  let service: ParentReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParentReportsService],
    }).compile();

    service = module.get<ParentReportsService>(ParentReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
