import { Test, TestingModule } from '@nestjs/testing';
import { CrudentidadeService } from './crudentidade.service';

describe('CrudentidadeService', () => {
  let service: CrudentidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudentidadeService],
    }).compile();

    service = module.get<CrudentidadeService>(CrudentidadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
