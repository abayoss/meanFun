import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { MilitaryService } from '../military.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-base',
  templateUrl: './show-base.component.html',
  styleUrls: ['./show-base.component.scss']
})
export class ShowBaseComponent implements OnInit {

  base: Base;

  constructor(private ms: MilitaryService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.populateMotor();
  }
  populateMotor() {
    const id = this.route.snapshot.params['id'];
    this.ms.getBase(id).subscribe((base: Base) => {
      this.base = base;
    });
  }

}
