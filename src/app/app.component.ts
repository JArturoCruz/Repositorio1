import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SegundoDiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
ejemplo = 'la variable hijo soy yo'

  }
