import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageSchema } from '../../models/image.model';
import { ImageService } from './image.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Image', schema: ImageSchema}]),
    MulterModule.register()
  ],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {
}
