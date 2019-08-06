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
      link: 'public',
      bullets: [
        'http Client',
        'Template driven Forms',
        'Reactive Forms'
      ]
    },
    {
      title: 'Private Resources',
      icon: 'lock',
      body: `interactions with the API,
        to get and modify the Private state`,
      link: 'private',
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
