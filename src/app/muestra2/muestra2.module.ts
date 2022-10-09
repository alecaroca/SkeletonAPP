import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Muestra2PageRoutingModule } from './muestra2-routing.module';

import { Muestra2Page } from './muestra2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Muestra2PageRoutingModule
  ],
  declarations: [Muestra2Page]
})
export class Muestra2PageModule {}
