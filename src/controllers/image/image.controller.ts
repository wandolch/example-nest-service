import { Body, Controller, Delete, Get, Param, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { imageSaveOptions } from './image-save-options';
import { ImageModel } from '../../models/image.model';
import { AddImageDto } from '../../dto/image.dto';
import { AssignmentDto } from '../../dto/assignment.dto';

@Controller('image')
export class ImageController {

  constructor(private imageService: ImageService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', imageSaveOptions))
  addImage(@UploadedFile() image: Express.Multer.File,
           @Query() assignment: AssignmentDto,
           @Body() addImageDto: AddImageDto): Promise<ImageModel> {
    return this.imageService.saveImage(image, addImageDto, assignment);
  }

  @Get()
  getImages(@Query() assignment: AssignmentDto): Promise<ImageModel[]> {
    return this.imageService.getImagesByAccountId(assignment);
  }

  @Delete(':imageId')
  removeImage(@Param('imageId') imageId: string): Promise<string> {
    return this.imageService.removeImageById(imageId);
  }
}
