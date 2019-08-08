import { Component, OnInit } from '@angular/core';
import { MilitaryService } from '../military.service';
import { Router } from '@angular/router';
import { Base } from '../base';

@Component({
  selector: 'app-add-base',
  templateUrl: './add-base.component.html',
  styleUrls: ['./add-base.component.scss']
})
export class AddBaseComponent implements OnInit {
  previewimage = '';
  constructor(
    private ms: MilitaryService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  onSubmit(form) {
    const newBase: Base = {
      name: form.value.name,
      image: form.value.image,
      location: form.value.location,
      background: form.value.background,
    };
    this.ms.addBase(newBase).subscribe(() => {
      this.router.navigate([`/base`]);
    });
  }

}
