import { Injectable } from '@nestjs/common';
import { AssignmentsDto } from './dto/assignments.dto';
import { LiveClassesDto } from './dto/live-classes.dto';
import { OutcomesDto } from './dto/outcomes.dto';
@Injectable()
export class ParentReportsService {
  liveClasses(liveClassesDto: LiveClassesDto) {
    return `This action adds a new parentReport ${liveClassesDto.classId}`;
  }

  classAttendance(orgId: string) {
    return `This action returns all parentReports ${orgId}`;
  }

  assignments(assignmentsDto: AssignmentsDto) {
    return `This action returns a #${assignmentsDto.year} parentReport`;
  }

  outcomes(outcomesDto: OutcomesDto) {
    return `This action updates a #${outcomesDto.assessmentId} parentReport`;
  }
}
