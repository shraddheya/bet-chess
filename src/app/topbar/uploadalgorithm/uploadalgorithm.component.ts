import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadalgorithm',
  templateUrl: './uploadalgorithm.component.html',
  styleUrls: ['./uploadalgorithm.component.scss']
})
export class UploadalgorithmComponent implements OnInit {

  AlgorithData: any = [];
  files: File[] = [];
  constructor() { }

  ngOnInit() {
  }
  onSelect(event) {
    event.addedFiles.forEach(el => {
      if (el.type == 'py' || el.type == '') {
        this.AlgorithData.push({
          algofile: el.name, games: '0', win: '0', lose: '0', tie: '0', uploadtime: '2020/03/26'
        });
      } else {
        Swal.fire('Please use only PY formate', '', 'warning');
      }
    });
  }
}
