import { IsUUID } from "class-validator";

export class OutcomesDto {
    @IsUUID()
    assessmentId: string;

    @IsUUID()
    studentId: string;
}