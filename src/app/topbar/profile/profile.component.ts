import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() user: any;
  menuOpts = {
    settings: 'cogs',
    logout: 'sign-out-alt'
  };
  asIs() { return 0; }
}
