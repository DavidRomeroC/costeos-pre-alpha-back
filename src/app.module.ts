import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SucursalesModule } from './sucursales/sucursales.module';
import { CosteosModule } from './costeos/costeos.module';

@Module({
  imports: [SucursalesModule, CosteosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
