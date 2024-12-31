import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { OtherModule } from './other/other.module';

@Module({
  imports: [AaaModule, OtherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
