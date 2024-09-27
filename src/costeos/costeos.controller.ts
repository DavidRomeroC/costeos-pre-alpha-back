import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CosteosService } from './costeos.service';
import { CreateCosteoDto } from './dto/create-costeo.dto';
import { UpdateCosteoDto } from './dto/update-costeo.dto';

@Controller('costeos')
export class CosteosController {
  constructor(private readonly costeosService: CosteosService) {}

  @Post()
  create(@Body() createCosteoDto: CreateCosteoDto) {
    return this.costeosService.create(createCosteoDto);
  }

  @Get()
  findAll() {
    return this.costeosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costeosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCosteoDto: UpdateCosteoDto) {
    return this.costeosService.update(+id, updateCosteoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costeosService.remove(+id);
  }
}
