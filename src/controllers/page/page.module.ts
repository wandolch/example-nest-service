import { Module } from '@nestjs/common';
import { PageController } from './page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PageService } from './page.service';
import { PageSchema } from '../../models/page.model';
import { ImageSchema } from '../../models/image.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Image', schema: ImageSchema},
      {name: 'Page', schema: PageSchema}
    ])
  ],
  controllers: [PageController],
  providers: [PageService]
})
export class PageModule {}
