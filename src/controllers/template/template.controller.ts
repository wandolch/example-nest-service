import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TemplateModel } from '../../models/template.model';
import { TEMPLATE_MODELS } from '../../templates-info/all-templates';

@Controller('template')
export class TemplateController {

  @Get('')
  public getAllTemplates(): TemplateModel[] {
    return Object.values(TEMPLATE_MODELS);
  }

  @Get(':templateId')
  public getTemplate(@Param('templateId') templateId: string): TemplateModel {
    if (!TEMPLATE_MODELS[templateId]) {
      throw new NotFoundException(`Could not find template with id ${templateId}`);
    }

    return TEMPLATE_MODELS[templateId];
  }
}
