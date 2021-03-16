import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Datele sunt stocate in aceasta variabila

  public data: any = [ ];

  // Preloarea datelor din api.service.ts

  constructor(private _http:ApiService){}
  ngOnInit(){
    return this._http.getApi().subscribe(data => this.data = data);
  }

  // Functia care rotunjeste Temperatura, temp_min, temp_max, Wind Speed

  getMath(param){
    return Math.floor(param);
  }
}
