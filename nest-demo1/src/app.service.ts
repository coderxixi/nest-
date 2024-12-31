import { Inject, Injectable } from '@nestjs/common';
import { OtherService } from './other/other.service';

@Injectable()
export class AppService {
  @Inject(OtherService) 
  private otherService: OtherService;
  getHello(): string {
    return '你好世界' + this.otherService.xxx();;
  }
}
