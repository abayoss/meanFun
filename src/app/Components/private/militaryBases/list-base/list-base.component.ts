import { Component, OnInit } from '@angular/core';
import { MilitaryService } from '../military.service';
import { Base } from '../base';

@Component({
  selector: 'app-list-base',
  templateUrl: './list-base.component.html',
  styleUrls: ['./list-base.component.scss']
})
export class ListBaseComponent implements OnInit {
  constructor(private ms: MilitaryService) {}
  bases: Base[];
  ngOnInit() {
    this.populateBases();
  }
  populateBases() {
    this.ms.getBases().subscribe((bases: Base[]) => {
      this.bases = bases;
    });
  }
}
