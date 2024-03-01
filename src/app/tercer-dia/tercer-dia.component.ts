import { Component } from '@angular/core';
import { EjemploService } from '../service/ejemplo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})
export class TercerDiaComponent {
name =""
users:any=[]
  constructor(public servicio: EjemploService){
}
ngOnInit() {
this.servicio.obtenerLista().subscribe(resp =>{
  console.log(resp);
  this.users= resp;
}
)
}

editarTexto(text:string){
  console.log(text);
  return text;
}

}
