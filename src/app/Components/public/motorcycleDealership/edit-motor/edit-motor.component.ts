import { Component, OnInit } from '@angular/core';
import { Motor } from '../motor';
import { MotorService } from '../motor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-motor',
  templateUrl: './edit-motor.component.html',
  styleUrls: ['./edit-motor.component.scss']
})
export class EditMotorComponent implements OnInit {
  motor: Motor;
  id = this.route.snapshot.params['id'];

  constructor(
    private ms: MotorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.populateMotor();
  }
  populateMotor() {
    this.ms.getMotor(this.id).subscribe((motor: Motor) => {
      this.motor = motor;
    });
  }
  onEdit(form) {
    const newMotor: Motor = {
      model: form.value.Model,
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
    this.ms.editMotor(this.id, newMotor).subscribe(() => {
      this.router.navigate([`/motor/show/${this.id}`]);
    });
  }
}
