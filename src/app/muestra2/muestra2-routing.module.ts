import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Muestra2Page } from './muestra2.page';

const routes: Routes = [
  {
    path: '',
    component: Muestra2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Muestra2PageRoutingModule {}
