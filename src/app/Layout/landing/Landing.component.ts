import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './Landing.component.html',
  styleUrls: ['./Landing.component.scss']
})
export class LandingComponent implements OnInit {
  landing = [
    {
      title: 'Public Resources',
      icon: 'refresh',
      body: `interactions with the API,
        to get and modify the public state`,
      link: 'motor',
      bullets: [
        'Template driven Forms',
        'Services',
        'HTTP Client'
      ]
    },
    {
      title: 'Private Resources',
      icon: 'lock',
      body: `interactions with the API,
        to get and modify the Private state`,
      link: 'login',
      bullets: [
        'Json Web Token',
        'Guards',
        'Interceptors'
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
