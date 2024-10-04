import { Injectable } from '@nestjs/common';
import { CreateCosteoDto } from './dto/create-costeo.dto';
import { UpdateCosteoDto } from './dto/update-costeo.dto';
import { costeos } from 'src/data/dataSource';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CosteosService {
  create(createCosteoDto: any) {
    let monto: number = 0
    const uuid = uuidv4()
    createCosteoDto.uuid = uuid
    const sucursales = createCosteoDto.newCosteo
    for (let index = 0; index < sucursales.length; index++) {
      const productos = createCosteoDto.newCosteo.at(index).productos
      for (let i = 0; i < productos.length; i++) {
        productos[i].costo = Number(productos[i].cantidad) * Number(productos[i].costocaja)
        monto = monto + Number(productos[i].costocaja)
        createCosteoDto.monto = monto //// pprueba salio bien, it can be better
        console.log(createCosteoDto.monto)
      }
    }
    costeos.push(createCosteoDto)
    return 'This action adds a new costeo';
  }

  findAll() {
    return costeos;
  }

  findOne(id: number) {
    return `This action returns a #${id} costeo`;
  }

  update(id: number, updateCosteoDto: UpdateCosteoDto) {
    return `This action updates a #${id} costeo`;
  }

  remove(id: number) {
    return `This action removes a #${id} costeo`;
  }
}
