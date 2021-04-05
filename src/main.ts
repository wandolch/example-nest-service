import { NestFactory } from '@nestjs/core';
import { AppModule } from './application.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { RenderService } from 'nest-next';

async function bootstrap() {
  const server = await NestFactory.create<NestExpressApplication>(AppModule);

  server.useStaticAssets(join(__dirname, '..', 'public'));
  server.useGlobalPipes(new ValidationPipe());

  const renderService = server.get(RenderService);

  renderService.setErrorHandler(async (err, req, res) => {
    // send JSON response
    res.send(err.response);
  });


  server.use(helmet());


  await server.listen(3000);
}

bootstrap();
