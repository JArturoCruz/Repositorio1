import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [GoogleMapsModule, MapMarker, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})

export class ProyectoFinalComponent {
  name = ""
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom: 14
  }
  
  marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  }
  marker2 = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  }
  marker3 = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  }

  markers = [this.marker, this.marker2, this.marker3];
  variable = ''
  btn_class = "btn btn-success"

  description = ''
  formulariouser: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    
  })
location:any = null
  user:any = []
  SubmitForm() {
    let obj={
      ...this.formulariouser.value,
      location:this.location
    }
    this.user.push(obj)
    console.log(this.formulariouser.value)
  }

  constructor() {
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
  clickButton(text: string) {
    this.variable = text
  }
  markerPositions:any;
  addMarker(event:any) {
    console.log(event) 
    let obj={
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      
    }
    this.location=obj
    console.log(obj)
  }
}






