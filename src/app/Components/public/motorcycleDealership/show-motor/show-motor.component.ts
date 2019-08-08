import { Component, OnInit } from '@angular/core';
import { MotorService } from '../motor.service';
import { Motor } from '../motor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-motor',
  templateUrl: './show-motor.component.html',
  styleUrls: ['./show-motor.component.scss']
})
export class ShowMotorComponent implements OnInit {
  motor: Motor;

  constructor(private ms: MotorService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.populateMotor();
  }
  populateMotor() {
    const id = this.route.snapshot.params['id'];
    this.ms.getMotor(id).subscribe((motor: Motor) => {
      this.motor = motor;
    });
  }
}
