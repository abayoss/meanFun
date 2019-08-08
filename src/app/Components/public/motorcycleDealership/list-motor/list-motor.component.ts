import { Component, OnInit } from '@angular/core';
import { Motor } from '../motor';
import { MotorService } from '../motor.service';

@Component({
  selector: 'app-list-motor',
  templateUrl: './list-motor.component.html',
  styleUrls: ['./list-motor.component.scss']
})
export class ListMotorComponent implements OnInit {
  motors: Motor[];
  constructor(private ms: MotorService) {}

  ngOnInit() {
    this.polulateMotors();
  }

  polulateMotors() {
    this.ms.getMotors().subscribe((motors: Motor[]) => {
      this.motors = motors;
    });
  }
}
