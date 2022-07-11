import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParentReportsService } from './parent-reports.service';
import { CreateParentReportDto } from './dto/create-parent-report.dto';
import { UpdateParentReportDto } from './dto/update-parent-report.dto';
import { LiveClassesDto } from './dto/live-classes.dto';

@Controller('parent-reports')
export class ParentReportsController {
  constructor(private readonly parentReportsService: ParentReportsService) {}

  @Get()
  liveClasses(@Body() liveClassesDto: LiveClassesDto) {
    return "Hiiiii"; //this.parentReportsService.create(createParentReportDto);
  }

  @Get()
  findAll() {
    return this.parentReportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentReportsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParentReportDto: UpdateParentReportDto,
  ) {
    return this.parentReportsService.update(+id, updateParentReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentReportsService.remove(+id);
  }
}
