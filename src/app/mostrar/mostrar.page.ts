import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
})
export class MostrarPage  {

posts: any

constructor(private mostrar: ApiService){

  this.mostrar.obtenerPosts().subscribe((res)=>{
    this.posts=res;
    console.log(res[0]);
  },(error)=>{
    console.log(error);
  });

}



}
