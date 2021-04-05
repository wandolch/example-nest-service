import { Controller, Get, Param, Res, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { LandingService } from './landing.service';
import { RenderExceptionsFilter } from '../../filters/render-exceptions.filter';
import { PageIdDto } from '../../dto/page.dto';
import { ConfigService } from "@nestjs/config";

@Controller('landing')
export class LandingController {

  constructor(private landingService: LandingService,
              private configService: ConfigService) {
  }

  @UseFilters(new RenderExceptionsFilter())
  @Get(':pageId')
  public async landing(@Param() { pageId }: PageIdDto,
                       @Res() res: Response): Promise<void> {

    const pageData = await this.landingService.getPageDataForRender(pageId);

    pageData.content.ENV = {
      ENV_URL: this.configService.get('ENV_URL'),
      UPLOADS_URL: `https://${this.configService.get('BUCKET_NAME')}.s3.amazonaws.com/`
    }

    return res.render(
      pageData.templateId,
      pageData.content
    );
  }
}
