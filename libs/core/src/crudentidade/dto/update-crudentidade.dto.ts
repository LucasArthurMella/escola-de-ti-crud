import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudentidadeDto } from './create-crudentidade.dto';

export class UpdateCrudentidadeDto extends PartialType(CreateCrudentidadeDto) {}
