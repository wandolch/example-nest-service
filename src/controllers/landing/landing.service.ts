import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PageModel } from '../../models/page.model';

@Injectable()
export class LandingService {
  constructor(@InjectModel('Page') private readonly pageModel: Model<PageModel>) {
  }

  public async getPageDataForRender(pageId: string): Promise<PageModel> {
    const pageDocument = await this.pageModel.findById(pageId);
    if (!pageDocument) {
      throw new NotFoundException(`Could not find page with id ${pageId}`);
    }

    return pageDocument;
  }
}