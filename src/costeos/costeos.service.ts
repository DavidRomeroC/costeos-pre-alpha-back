import { Injectable } from '@nestjs/common';
import { CreateCosteoDto } from './dto/create-costeo.dto';
import { UpdateCosteoDto } from './dto/update-costeo.dto';
import { costeos } from 'src/data/dataSource';

@Injectable()
export class CosteosService {
  create(createCosteoDto: CreateCosteoDto) {
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
