import { Module } from '@nestjs/common';
import { LandingController } from './landing.controller';
import { LandingService } from './landing.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PageSchema } from '../../models/page.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Page', schema: PageSchema}
    ])
  ],
  controllers: [LandingController],
  providers: [LandingService]
})
export class LandingModule {}
