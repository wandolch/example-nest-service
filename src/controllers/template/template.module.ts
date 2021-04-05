import { Module } from '@nestjs/common';
import { TemplateController } from './template.controller';

@Module({
  imports: [],
  controllers: [TemplateController],
  providers: []
})
export class TemplateModule {}
