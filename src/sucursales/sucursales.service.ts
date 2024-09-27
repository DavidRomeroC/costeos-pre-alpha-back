import { Injectable } from '@nestjs/common';
import { CreateSucursaleDto } from './dto/create-sucursale.dto';
import { UpdateSucursaleDto } from './dto/update-sucursale.dto';
import { catalogos } from 'src/data/dataSource';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class SucursalesService {
  create(createSucursaleDto: CreateSucursaleDto) {
    return 'This action adds a new sucursale';
  }

  findAll() {
    return catalogos
  }

  findOne(id: number) {
    const foundSucursal = catalogos.find((suc: any) => suc.id === id)
    return foundSucursal;
  }

  updateOne(id: number, updateOneElement: any) {
    const uuid = updateOneElement.uuid
    const foundSucursal = catalogos.find((suc: any) => suc.id === id)
    const product = foundSucursal.productos.find((prod: any) => prod.uuid === uuid)
    Object.assign(product, {
      cantidad: updateOneElement.cantidad,
      numxpieza: updateOneElement.numxpieza,
      uuid: updateOneElement.uuid,
      codePlu: updateOneElement.codePlu,
      verdura: updateOneElement.verdura,
      tara: updateOneElement.tara,
      promedio: updateOneElement.promedio,
      entero: updateOneElement.entero
    });

    return catalogos
  }

  update(id: number, updateSucursaleDto: any) {
    console.log(id)
    const uudi = uuidv4()
    updateSucursaleDto.uuid = uudi
    const foundSucursal = catalogos.find((suc: any) => suc.id === id)
    foundSucursal.productos.push(updateSucursaleDto)
    return catalogos;
  }

  remove(id: number, deleteElement: any) {
    const uuid = deleteElement.uuid
    const foundSucursal = catalogos.find((suc: any) => suc.id === id)
    const productIndex = foundSucursal.productos.findIndex((prod: any) => prod.uuid === uuid)
    foundSucursal.productos.splice(productIndex, 1)

    return `This action removes a #${id} sucursale`;
  }
}
