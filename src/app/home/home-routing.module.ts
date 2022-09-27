import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { DatosComponent } from '../datos/datos.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'datos',
        component: DatosComponent
      },
      {
        path:'experiencia',
        component: ExperienciaComponent
      },
      {
        path:'certificaciones',
        component: CertificacionesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
