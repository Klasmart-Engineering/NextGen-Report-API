import { ArrayUnique, arrayUnique, IsNumber, IsUUID } from 'class-validator';
import { DateIsGreaterThan } from '../../decorators';

export class LiveClassesDto {
  @IsNumber()
  year: number;

  @IsNumber()
  weekStart: number;

  @IsNumber()
  @DateIsGreaterThan('weekStart')
  weekEnd: number;

  @ArrayUnique()
  @IsUUID(4, {
    each: true,
  })
  schoolId: string[];

  @IsUUID()
  classId: string;

  @IsUUID()
  studentId: string;

  @IsUUID()
  subjectId: string;

  @IsUUID()
  orgId: string;
}
