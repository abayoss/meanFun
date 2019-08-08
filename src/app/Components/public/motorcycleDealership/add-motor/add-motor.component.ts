import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotorService } from '../motor.service';
import { Motor } from '../motor';

@Component({
  selector: 'app-add-motor',
  templateUrl: './add-motor.component.html',
  styleUrls: ['./add-motor.component.scss']
})
export class AddMotorComponent implements OnInit {
  previewimage = '';
  constructor(
    private ms: MotorService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  onSubmit(form) {
    const newMotor: Motor = {
      model: form.value.Model,
      image: form.value.image,
      details: form.value.Details,
      technicalDetails: {
        DISPLACEMENT: form.value.DISPLACEMENT,
        POWERINHP: form.value.POWERINHP,
        POWERINKW: form.value.POWERINKW,
        TORQUE: form.value.TORQUE,
        DESIGN: form.value.DESIGN,
        STROKE: form.value.STROKE
      }
    };
    this.ms.addMotor(newMotor).subscribe(() => {
      this.router.navigate([`/motor`]);
    });
  }

}
