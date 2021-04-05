export const LIB_WIDGET_SCHEMA = {
  type: 'object',
  required: ['options', 'assignmentInfo'],
  additionalProperties: true,
  properties: {
    options: {
      type: 'object',
      additionalProperties: true
    },
    assignmentInfo: {
      type: 'object',
      additionalProperties: true,
      required: ['account', 'token'],
      properties: {
        account: {
          type: 'string'
        },
        token: {
          type: 'string'
        }
      }
    }
  }
};