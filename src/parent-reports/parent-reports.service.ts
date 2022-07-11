import { Injectable } from '@nestjs/common';
import { CreateParentReportDto } from './dto/create-parent-report.dto';
import { UpdateParentReportDto } from './dto/update-parent-report.dto';

@Injectable()
export class ParentReportsService {
  create(createParentReportDto: CreateParentReportDto) {
    return 'This action adds a new parentReport';
  }

  findAll() {
    return `This action returns all parentReports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parentReport`;
  }

  update(id: number, updateParentReportDto: UpdateParentReportDto) {
    return `This action updates a #${id} parentReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} parentReport`;
  }
}
