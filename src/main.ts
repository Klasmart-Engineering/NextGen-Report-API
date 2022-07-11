import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { kidsloopAuthMiddleware } from '@kl-engineering/kidsloop-token-validation';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { checkAuthentication } from './middlewares/check.authentication';
import { TransformInterceptor } from './interceptors/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(cookieParser());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.use(kidsloopAuthMiddleware());
  app.use(checkAuthentication);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Next-gen-reports')
    .setDescription('The next gen reports api')
    .setVersion('1.0')
    .addTag('reports')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
