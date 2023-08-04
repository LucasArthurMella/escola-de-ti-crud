import { Route } from '@angular/router';
import { CrudComponent } from './crud/crud.component';

export const crudentidadeRoutes: Route[] = [
  {path: '', pathMatch: 'prefix', component: CrudComponent}
];
