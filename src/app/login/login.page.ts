import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;
  
  constructor(
    private router: Router, 
    public fb: FormBuilder,
    public toastController: ToastController ) { 

    this.formulariologin = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)

    })
  }

  user={ 
    usuario:"",
    password:""
  }
  ngOnInit(){
  }
  ingresar(){

    if(this.formulariologin.invalid){
      this.presentToast("Ingresa usuario y password: "+ this.user);
    }
    else{
      this.router.navigate(['/home']);
    }
    
  }
  
  mostrar2(): void{
    this.router.navigate(['/mostrar']);
  }


  // mensajes toast
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

}
