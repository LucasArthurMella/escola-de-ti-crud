import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrudentidadeService } from './crudentidade.service';
import { CreateCrudentidadeDto } from './dto/create-crudentidade.dto';
import { UpdateCrudentidadeDto } from './dto/update-crudentidade.dto';

@Controller('crudentidade')
export class CrudentidadeController {
  constructor(private readonly crudentidadeService: CrudentidadeService) {}

  @Post()
  create(@Body() createCrudentidadeDto: CreateCrudentidadeDto) {
    return this.crudentidadeService.create(createCrudentidadeDto);
  }

  @Get()
  findAll() {
    return this.crudentidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudentidadeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCrudentidadeDto: UpdateCrudentidadeDto
  ) {
    return this.crudentidadeService.update(+id, updateCrudentidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudentidadeService.remove(+id);
  }
}
