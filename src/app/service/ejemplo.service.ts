import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EjemploService {
  var_service = "Estoy en mi servicio";
  api_url = 'https://jsonplaceholder.typicode.com/'
  api_url2='https://jsonplaceholder.typicode.com/posts'
  api_url3=''
  constructor(private http: HttpClient) {

  }
  obtenerLista() {
    return this.http.get(this.api_url + 'posts')
  }
  crear(){
    return this.http.post(this.api_url2+ 'posts','application/json; charset=UTF-8')
  }
  onClickButton(text: string) {
    console.log(text)
    this.var_service = text
  }

}
