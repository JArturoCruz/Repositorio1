import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  @Input() ejemplo:string='';
  @Input() usuario:number=0;
  title = 'Facebook';
  description = "Bienvenido"
  card={
    title: 'Amigos',
  description: "holaa"
  }
}
