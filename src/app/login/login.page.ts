import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


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
    public toastController: ToastController,
    private storage: Storage ) { 

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
      this.presentToast("Ingresa tu usuario y password: ");
    }
    else{
      this.router.navigate(['/home']);
      localStorage.setItem('usuario',JSON.stringify(this.formulariologin.value));      
    }
    
  }
  

  mostrar2(): void{
    this.router.navigate(['/mostrar']);
  }
  mostrar3(): void{
    this.router.navigate(['/geo']);
  }

  // mensajes toast
  async presentToast(message:string, duration?:number): Promise<void>{
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

}
