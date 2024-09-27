import { PartialType } from '@nestjs/mapped-types';
import { CreateCosteoDto } from './create-costeo.dto';

export class UpdateCosteoDto extends PartialType(CreateCosteoDto) {}
