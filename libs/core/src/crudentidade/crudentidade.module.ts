import { Module } from '@nestjs/common';
import { CrudentidadeService } from './crudentidade.service';
import { CrudentidadeController } from './crudentidade.controller';

@Module({
  controllers: [CrudentidadeController],
  providers: [CrudentidadeService],
})
export class CrudentidadeModule {}
