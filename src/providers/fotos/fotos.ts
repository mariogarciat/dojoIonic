import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the FotosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FotosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FotosProvider Provider');
  }

  getFotos(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }

}
