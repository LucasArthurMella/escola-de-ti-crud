import { Test, TestingModule } from '@nestjs/testing';
import { CrudentidadeController } from './crudentidade.controller';
import { CrudentidadeService } from './crudentidade.service';

describe('CrudentidadeController', () => {
  let controller: CrudentidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudentidadeController],
      providers: [CrudentidadeService],
    }).compile();

    controller = module.get<CrudentidadeController>(CrudentidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
