import { PartialType } from '@nestjs/mapped-types';
import { CreateParentReportDto } from './create-parent-report.dto';

export class UpdateParentReportDto extends PartialType(CreateParentReportDto) {}
