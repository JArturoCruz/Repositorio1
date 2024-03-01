import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EjemploService {
  var_service = "Estoy en mi servicio";
  api_url = 'https://jsonplaceholder.typicode.com/'
  api_url2='https://jsonplaceholder.typicode.com/'
  api_url3='https://jsonplaceholder.typicode.com/posts/1'
  constructor(private http: HttpClient) {

  }
  obtenerLista() {
    return this.http.get(this.api_url + 'posts')
  }
  crear(){
    return this.http.post(this.api_url2+ 'posts','application/json; charset=UTF-8')
  }
  borrar(){
    return this.http.delete(this.api_url3+ 'posts')
  }
  onClickButton(text: string) {
    console.log(text)
    this.var_service = text
  }

}
