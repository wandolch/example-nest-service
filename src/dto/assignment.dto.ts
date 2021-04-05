import { Assignment } from '../models/page.model';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AssignmentDto implements Assignment {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  projectId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  processId: string;
}