import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImageModel } from '../../models/image.model';
import { AddImageDto } from '../../dto/image.dto';
import { AssignmentDto } from '../../dto/assignment.dto';
import { AwsS3Service } from "../../services/aws-s3.service";

@Injectable()
export class ImageService {
  constructor(@InjectModel('Image') private readonly imageModel: Model<ImageModel>,
              private awsService: AwsS3Service) {
  }

  public async saveImage(image: Express.Multer.File, { creatorId }: AddImageDto, assignment: AssignmentDto): Promise<ImageModel> {
    const fileName = await this.awsService.uploadFile(image);

    const newImage = new this.imageModel({
      _id: fileName,
      assignment,
      creatorId
    });
    return newImage.save();
  }

  public getImagesByAccountId(assignment: AssignmentDto): Promise<ImageModel[]> {
    const query = {};
    for (const key in assignment) {
      query[`assignment.${key}`] = assignment[key];
    }
    return this.imageModel.find(query).exec();
  }

  public async removeImageById(imageId: string): Promise<string> {
    await this.awsService.deleteFile(imageId);
    let result = await this.imageModel.deleteOne({_id: imageId}).exec();
    if (result.deletedCount !== 1) throw new NotFoundException(`Could not find image with id ${imageId}`);

    return 'The image has been deleted';
  }
}