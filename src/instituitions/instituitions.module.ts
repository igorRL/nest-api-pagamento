import { Module } from '@nestjs/common';
import { InstituitionsService } from './instituitions.service';
import { InstituitionsController } from './instituitions.controller';

@Module({
  controllers: [InstituitionsController],
  providers: [InstituitionsService]
})
export class InstituitionsModule {}
