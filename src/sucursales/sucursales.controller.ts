import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';
import { CreateSucursaleDto } from './dto/create-sucursale.dto';
import { UpdateSucursaleDto } from './dto/update-sucursale.dto';

@Controller('sucursales')
export class SucursalesController {
  constructor(private readonly sucursalesService: SucursalesService) { }

  @Post()
  create(@Body() createSucursaleDto: CreateSucursaleDto) {
    return this.sucursalesService.create(createSucursaleDto);
  }

  @Get()
  findAll() {
    return this.sucursalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sucursalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateSucursaleDto: UpdateSucursaleDto) {
    return this.sucursalesService.update(+id, updateSucursaleDto);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() updateOneElement: any) {
    return this.sucursalesService.updateOne(+id, updateOneElement)
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() deleteElement: any) {
    return this.sucursalesService.remove(+id, deleteElement);
  }
}
