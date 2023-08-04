import { Injectable } from '@nestjs/common';
import { CreateCrudentidadeDto } from './dto/create-crudentidade.dto';
import { UpdateCrudentidadeDto } from './dto/update-crudentidade.dto';

@Injectable()
export class CrudentidadeService {
  create(createCrudentidadeDto: CreateCrudentidadeDto) {
    return 'This action adds a new crudentidade';
  }

  findAll() {
    return { code: `This action returns all crudentidade` };
  }

  findOne(id: number) {
    return `This action returns a #${id} crudentidade`;
  }

  update(id: number, updateCrudentidadeDto: UpdateCrudentidadeDto) {
    return `This action updates a #${id} crudentidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudentidade`;
  }
}
