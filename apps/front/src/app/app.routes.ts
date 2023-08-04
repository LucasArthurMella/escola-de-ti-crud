import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'crudentidade',
    loadChildren: () =>
      import('@i-mage/crudentidade').then((m) => m.CrudentidadeModule),
  },
];
