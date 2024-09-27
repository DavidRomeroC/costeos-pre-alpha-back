import { Module } from '@nestjs/common';
import { CosteosService } from './costeos.service';
import { CosteosController } from './costeos.controller';

@Module({
  controllers: [CosteosController],
  providers: [CosteosService],
})
export class CosteosModule {}
