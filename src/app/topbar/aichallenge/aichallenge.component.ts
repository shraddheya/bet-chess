import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aichallenge',
  templateUrl: './aichallenge.component.html',
  styleUrls: ['./aichallenge.component.scss']
})
export class AichallengeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  
  clicked() {
    Swal.fire({
      icon: 'info',
      title: 'Challenge AI',
      text: 'This Feature will Comming soon..',
      timer: 3000 ,
    });
  }
}
