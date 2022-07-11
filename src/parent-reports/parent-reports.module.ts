import { Module } from '@nestjs/common';
import { ParentReportsService } from './parent-reports.service';
import { ParentReportsController } from './parent-reports.controller';

@Module({
  controllers: [ParentReportsController],
  providers: [ParentReportsService]
})
export class ParentReportsModule {}
