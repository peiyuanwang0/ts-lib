import { Module } from '@nestjs/common';
import { TmfService } from './tmf.service';

@Module({
  providers: [TmfService],
  exports: [TmfService],
})
export class TmfModule {}
