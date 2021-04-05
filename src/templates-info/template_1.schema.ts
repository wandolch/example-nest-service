import { LIB_WIDGET_SCHEMA } from './common/lib-widget.schema';
import { STANDARD_HEAD_SCHEMA } from './common/standard-head.schema';

export const TEMPLATE_1_SCHEMA = {
  type: 'object',
  required: ['head', 'text', 'images', 'widgets'],
  additionalProperties: false,
  properties: {
    head: STANDARD_HEAD_SCHEMA,
    text: {
      type: 'object',
      additionalProperties: false,
      required: ['note'],
      properties: {
        note: {
          type: 'string'
        }
      }
    },
    images: {
      type: 'object',
      additionalProperties: false,
      required: ['logo'],
      properties: {
        logo: {
          type: 'string'
        }
      }
    },
    widgets: {
      type: 'object',
      required: ['lib'],
      additionalProperties: false,
      properties: {
        lib: LIB_WIDGET_SCHEMA
      }
    }
  }
};
