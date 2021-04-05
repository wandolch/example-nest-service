import Next from 'next';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LandingModule } from './controllers/landing/landing.module';
import { PageModule } from './controllers/page/page.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageModule } from './controllers/image/image.module';
import { RenderModule } from 'nest-next';
import { TemplateModule } from './controllers/template/template.module';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SharedModule } from "./services/shared.module";
console.log(process.env.NODE_ENV);
@Module({
  imports: [
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'configuration/.env',
    }),
    RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' })),
    LandingModule,
    ImageModule,
    PageModule,
    TemplateModule,
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('DB_URI')
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AppController]
})
export class AppModule {}
