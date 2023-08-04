import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { crudentidadeRoutes } from './lib.routes';
import { CrudComponent } from './crud/crud.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(crudentidadeRoutes), HttpClientModule],
  declarations: [CrudComponent],
})
export class CrudentidadeModule {}
