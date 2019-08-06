import { Component, OnInit } from '@angular/core';
import { Motor } from '../motor';
import { FakeMotorService } from '../fake-motor.service';

@Component({
  selector: 'app-list-motor',
  templateUrl: './list-motor.component.html',
  styleUrls: ['./list-motor.component.scss']
})
export class ListMotorComponent implements OnInit {

  constructor(private fms: FakeMotorService) {}
  fakeMotors: Motor[];
  fakeMode = false;
  ngOnInit() {
    if (!this.fakeMode) {
      this.fakeMotors = this.fms.getFakeMotors();
    }
  }
}
