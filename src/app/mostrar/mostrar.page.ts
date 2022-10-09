import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
})
export class MostrarPage  {

posts: any
post: any
opcion: any 

constructor(private mostrar: ApiService){

  this.mostrar.obtenerPosts().subscribe((res)=>{
    this.posts=res;
    console.log(res);
  },(error)=>{
    console.log(error);
  });
}
getItem($event) {
  //Captura el eventos seleccionado, en esta caso el id
  console.log($event.detail.value);
  //Asigno el evento seleccionado a una variable
  this.opcion  =$event.detail.value
  console.log(this.opcion);
  //Muestra el elemento que insertamos mediante la variable
  this.mostrar.obtenerPostsFiltrado(this.opcion).subscribe((res2)=>{
    //Objeto para iterar en el HTML
    this.post=res2;
    console.log(res2);
  },(error)=>{
    console.log(error);
  });
}



}
