import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import { ParentReportsService } from './parent-reports.service';
import { LiveClassesDto } from './dto/live-classes.dto';
import { AssignmentsDto } from './dto/assignments.dto';
import { OutcomesDto } from './dto/outcomes.dto';
import { Response } from 'express';

@Controller('parent-reports')
export class ParentReportsController {
  constructor(private readonly parentReportsService: ParentReportsService) {}

  @Get('live-classes')
  liveClasses(
    @Query() liveClassesDto: LiveClassesDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.parentReportsService.liveClasses(liveClassesDto);
  }

  @Get('class-attendance/:orgId')
  classAttendance(
    @Param('orgId') orgId: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.parentReportsService.classAttendance(orgId);
  }

  @Get('assignments')
  assignments(
    @Query() assignmentsDto: AssignmentsDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.parentReportsService.assignments(assignmentsDto);
  }

  @Get('outcomes')
  outcomes(
    @Query() outcomesDto: OutcomesDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.parentReportsService.outcomes(outcomesDto);
  }
}
