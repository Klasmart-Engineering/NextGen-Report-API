import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentReportsModule } from './parent-reports/parent-reports.module';

@Module({
  imports: [ConfigModule.forRoot(), ParentReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
