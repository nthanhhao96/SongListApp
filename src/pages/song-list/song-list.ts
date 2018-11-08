import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SongsService } from '../../services/songs.service'
import {Observable } from 'rxjs/Observable';
import { Song } from '../../models/song.model';
import { Band } from '../../models/band.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-song-list',
  templateUrl: 'song-list.html',
})
export class SongListPage {

  songsList$: Observable<Song[]>;
  bandsList$: Observable<Band[]>;

  band: Band = {
    name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private songsService: SongsService) {
    this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes => {
      return changes.map (c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  ionViewWillLoad() {
    this.bandsList$ = this.songsService.getBandList().snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  onContextChange(ctxt: string): void {
    this.songsList$ = this.songsService.assembleBandFilteredList(ctxt).snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  showAllSongs() {
    this.songsList$ = this.songsService.getSongsList().snapshotChanges().map(changes => {
      return changes.map (c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

}
// Hao Nguyen - 1601800
