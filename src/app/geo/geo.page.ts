import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage  {

  constructor(public geolocation:Geolocation, navCtrl: NavController) { }

  ngAfterViewInit(){
    this.geoNative();
  }

  geoNative(){
    this.geolocation.getCurrentPosition().then((geoposition :Geoposition)=>{

      console.log(geoposition);
    })
  }



}
