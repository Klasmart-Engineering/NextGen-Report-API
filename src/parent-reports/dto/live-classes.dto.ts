import { Transform, Type } from 'class-transformer';
import {
  ArrayUnique,
  arrayUnique,
  IsInt,
  IsNumber,
  IsUUID,
} from 'class-validator';
import { DateIsGreaterThan } from '../../decorators';

export class LiveClassesDto {
  @IsNumber()
  @Type(() => Number)
  year: number;

  @IsNumber()
  @Type(() => Number)
  weekStart: number;

  @IsNumber()
  @Type(() => Number)
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
