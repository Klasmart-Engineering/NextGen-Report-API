import { Controller, Get, Next, Res, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { withLogger } from '@kl-engineering/kidsloop-nodejs-logger';
import { Response } from 'express';
import { TransformInterceptor } from './interceptors/response.interceptor';
const log = withLogger('my-module');

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(@Res({ passthrough: true }) response: Response): string {
    log.warn('tesint');
    if (response.locals.authenticated) {
      log.warn('authenticated');
    } else {
      log.warn('not authenticated' + ' ' + response.locals.token);
    }
    return this.appService.getHello();
  }
}
