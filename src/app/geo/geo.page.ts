import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';
import { ViewChild,ElementRef } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage  {
  //variable mapa
  map: any;
  //variable para recoger la geolocalizacion
  xy: any;
  //variable para el marcador
  marker:any;
  @ViewChild('map',{read: ElementRef, static: false}) mapRef: ElementRef;  

  constructor(public geolocation:Geolocation, navCtrl: NavController) { }

   //capturo mi localizacion con api nativa de ionic
  geoNative(){
    this.geolocation.getCurrentPosition().then((geoposition :Geoposition)=>{
      this.xy = geoposition;
      console.log(geoposition);
    })
  }

 
  //Funcion que crea el mapa
  showMap(){
    
    const flecha ={lat: this.xy.coords.latitude, lng:this.xy.coords.longitude};
    const location = new google.maps.LatLng(this.xy.coords.latitude, this.xy.coords.longitude);
    const options = {
      center: location,
      zoom: 18,
      /* disableDefaultUI: false, */
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    //Marcador
    var marker = new google.maps.Marker({
      position: {lat: this.xy.coords.latitude, lng:this.xy.coords.longitude},
      map: this.map,
      title: "Tu ubicacion"
        });
  }

  ionViewDidEnter(){
    this.showMap();
  }
// carga funcion al inicio
  ngAfterViewInit(){
    this.geoNative();
  }
 
}
