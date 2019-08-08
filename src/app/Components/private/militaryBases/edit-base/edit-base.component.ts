import { Component, OnInit } from '@angular/core';
import { Base } from '../base';
import { MilitaryService } from '../military.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-base',
  templateUrl: './edit-base.component.html',
  styleUrls: ['./edit-base.component.scss']
})
export class EditBaseComponent implements OnInit {
  base: Base;
  id = this.route.snapshot.params['id'];

  constructor(
    private ms: MilitaryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.populateMotor();
  }
  populateMotor() {
    this.ms.getBase(this.id).subscribe((base: Base) => {
      this.base = base;
    });
  }
  onEdit(form) {
    const nawBase: Base = {
      name: form.value.name,
      image: form.value.image,
      location: form.value.location,
      background: form.value.background
    };
    this.ms.editBase(this.id, nawBase).subscribe(() => {
      this.router.navigate([`/base/show/${this.id}`]);
    });
  }
}
