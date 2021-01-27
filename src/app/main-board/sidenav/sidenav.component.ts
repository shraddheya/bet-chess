import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showsidenav = true;
  toUser = {};
  files = []

  normalgame = false;
  sharevisible = true;
  sendChallenge: any = {
    username: '',
    senddata: { who_can_play: '', bet_amount: '', sender_ai: '', game_status: 1, visibility: '' }
  };
  uploadChallenge = true;
  
  @ViewChild('ChallengeModal') ChallengeModal: any
  constructor(public ds: DataService) { }
  asIs() { return 0; }
  challengePlayer(usr: any){
    this.toUser = { ...this.ds.playersList[usr] };
    this.ChallengeModal.show();
  }
  ngOnInit() { };
  
  viewGame(e: any) {}
  challengeSelect(e: any) {}
  challengeRequest(e: any) {}
  onSelect(e: any) {}
}
