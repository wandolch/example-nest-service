import {
  IsMongoId,
  IsNotEmpty,
  IsString,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { Assignment } from '../models/page.model';
import { AssignmentDto } from './assignment.dto';
import { PageContent } from '../validators/page.validators';

export class PageIdDto {
  @IsMongoId()
  pageId: string;
}

export class CreatePageDto {
  @IsString()
  @IsNotEmpty()
  templateId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  creatorId: string;

  @ValidateNested()
  @Type(() => AssignmentDto)
  assignment: Assignment;

  @PageContent()
  content: Record<string, any>;
}

export class EditPageDto {
  @IsString()
  @IsNotEmpty()
  templateId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @PageContent()
  content: Record<string, any>;
}



