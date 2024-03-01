import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProyectoFinalComponent } from './proyecto-final/proyecto-final.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMap, GoogleMapsModule, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimerDiaComponent,SegundoDiaComponent,RouterModule,TercerDiaComponent,ProyectoFinalComponent,AppComponent,GoogleMap,GoogleMapsModule,MapMarker],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
ejemplo = 'la variable hijo soy yo'

  }

