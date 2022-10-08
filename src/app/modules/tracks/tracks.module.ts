import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TacksPageComponent } from './pages/tacks-page/tacks-page.component';


@NgModule({
  declarations: [
    TacksPageComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule
  ]
})
export class TracksModule { }
