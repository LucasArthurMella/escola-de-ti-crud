import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'i-mage-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {

  httpClient = inject(HttpClient);

  showGet(){
    this.httpClient.get('/api/crudentidade').subscribe(console.log);
  }
}
