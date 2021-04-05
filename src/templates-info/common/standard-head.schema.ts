export const STANDARD_HEAD_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['title'],
  properties: {
    title: {
      type: 'string'
    }
  }
};
