import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})
export class SegundoDiaComponent {
variable=''
btn_class ="btn btn-success"
 name='';
 description=''
formulariouser:FormGroup = new FormGroup({
  name: new FormControl(''),
  description: new FormControl('')
})

user = [
  {
name:'Arturo 1',
description: "descripcion 1"
  },
  {
    name:'Arturo 1',
    description: "descripcion 2"
  },
  {
  name:'Arturo 1',
  description: "descripcion 3"
 }
    

]
  SubmitForm(){
    
    console.log(this.formulariouser.value)
  }

  constructor(){
console.log("Se inicio el constructor")
  }
  ngOnInit() {
  console.log("Se ejecuto el oninit")
  }
  ngDoCheck(): void {
   console.log("se ejecutó docheck")
    
  }
  ngOnDestroy() {
    console.log("Se ejecutó onDestroy")
  }
clickButton(text:string){
 this.variable = text
}
}


