import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './Components/media-player/media-player.component';
import { HeaderUserComponent } from './Components/header-user/header-user.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SharedModule { }
