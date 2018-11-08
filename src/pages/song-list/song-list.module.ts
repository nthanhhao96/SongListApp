import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SongListPage } from './song-list';

@NgModule({
  declarations: [
    SongListPage,
  ],
  imports: [
    IonicPageModule.forChild(SongListPage),
  ],
})
export class SongListPageModule {}
