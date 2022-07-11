import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateParentReportDto {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

}
