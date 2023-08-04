
import { Module } from '@nestjs/common';
import { CrudentidadeModule } from '../crudentidade/crudentidade.module';

@Module({
  imports: [CrudentidadeModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class CoreModule {}
