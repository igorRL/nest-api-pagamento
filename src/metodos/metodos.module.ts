import { Module } from '@nestjs/common';
import { MetodosService } from './metodos.service';
import { MetodosController } from './metodos.controller';

@Module({
  controllers: [MetodosController],
  providers: [MetodosService]
})
export class MetodosModule {}
