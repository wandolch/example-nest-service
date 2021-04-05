import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assignment, PageModel } from '../../models/page.model';
import { CreatePageDto, EditPageDto } from '../../dto/page.dto';
import { ImageModel } from '../../models/image.model';

@Injectable()
export class PageService {
  constructor(@InjectModel('Page') private readonly pageModel: Model<PageModel>,
              @InjectModel('Image') private readonly imageModel: Model<ImageModel>) {
  }

  public async savePage({
                          templateId,
                          name,
                          creatorId,
                          assignment,
                          content
                        }: CreatePageDto): Promise<string> {
    await this.checkImagesExist(content.images);

    const newPage = new this.pageModel({templateId, name, creatorId, assignment, content, isActive: true});
    await newPage.save();

    return `The new page with id ${newPage.id} has been created.`;
  }

  public async editPageById(pageId: string, editPageDto: EditPageDto): Promise<PageModel> {
    await this.checkImagesExist(editPageDto.content.images);
    const pageDocument = await this.pageModel.findOneAndUpdate({_id: pageId}, editPageDto).exec();

    if (!pageDocument) throw new NotFoundException(`Could not find page with id ${pageId}`);

    return pageDocument;
  }

  public async getPageById(pageId: string): Promise<PageModel> {
    const pageDocument = await this.pageModel.findById(pageId).exec();
    if (!pageDocument) throw new NotFoundException(`Could not find page with id ${pageId}`);

    return pageDocument;
  }

  public async getPagesByAssignment(assignment: Assignment): Promise<PageModel[]> {
    const query = {};
    for (const key in assignment) {
      query[`assignment.${key}`] = assignment[key];
    }
    return await this.pageModel.find(query).exec();
  }

  public async removePageById(pageId: string): Promise<string> {
    let result = await this.pageModel.findByIdAndDelete(pageId).exec();
    if (!result) throw new NotFoundException(`Could not find page with id ${pageId}`);

    return 'The page has been deleted'
  }

  private async checkImagesExist(images: Record<string, string>) {
    for await (const imageName of Object.keys(images)) {
      const imageId = images[imageName];
      const imageDb = await this.imageModel.findOne({_id: imageId});
      if (!imageDb) {
        throw new NotFoundException(`Could not find image with id ${imageId}`);
      }
    }
  }
}