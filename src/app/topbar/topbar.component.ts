import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  userdata: any = {
    isLoggedIn: false,
    username: null
  }
  envProject = {name: 'localEnv'};

  constructor(public ds: DataService) { }

  ngOnInit(): void {
    console.log('checkinglogin');
    this.ds.getLogin().subscribe((res: any) => {
      //toast res.msg
      this.ds.user = res.user;
      console.log(res);
      // this.ds.user = {name:'sadf'};
    });
  }
}
