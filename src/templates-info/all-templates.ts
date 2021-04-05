import { TemplateModel } from '../models/template.model';
import { TEMPLATE_1_SCHEMA } from './template_1.schema';
import { TEMPLATE_2_SCHEMA } from './template_2.schema';

export const TEMPLATE_1_MODEL: TemplateModel = {
  _id: 'template_1',
  name: 'Template with phone picture',
  previewUrl: '/assets/template-1-preview.png',
  contentSchema: TEMPLATE_1_SCHEMA
};

export const TEMPLATE_2_MODEL: TemplateModel = {
  _id: 'template_2',
  name: 'Template with logo and form',
  previewUrl: '/assets/template-2-preview.png',
  contentSchema: TEMPLATE_2_SCHEMA
};

export const TEMPLATE_MODELS: Record<string, TemplateModel> = {
  [TEMPLATE_1_MODEL._id]: TEMPLATE_1_MODEL,
  [TEMPLATE_2_MODEL._id]: TEMPLATE_2_MODEL
};