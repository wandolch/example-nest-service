import Ajv from 'ajv'
import { registerDecorator, ValidationArguments } from 'class-validator';
import { CreatePageDto } from '../dto/page.dto';
import { TEMPLATE_MODELS } from '../templates-info/all-templates';

export function PageContent() {
  let message = '';
  const options = { message: () => message };
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'PageContent',
      target: object.constructor,
      propertyName: propertyName,
      options,
      validator: {
        validate(content: Record<string, any>, args: ValidationArguments): boolean {
          const pageInfo = (<CreatePageDto>args.object);
          const templateModel = TEMPLATE_MODELS[pageInfo.templateId];
          if(!templateModel) {
            message = `Could not find template with id ${pageInfo.templateId}`;
            return false;
          }
          const ajv = new Ajv();
          const validate = ajv.compile(templateModel.contentSchema);
          const isValid = validate(content);
          if (validate.errors) {
            message = `The content is not valid: ${validate.errors[0]?.message}`;
          }
          return Boolean(isValid);
        }
      }
    });
  };
}