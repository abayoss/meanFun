import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeMotorService {
  fakeMotors = [
    {
      model: 'KTM 1290 SUPER DUKE R 2019',
      type: 'naked',
      image:
        'https://www.ktm.com/globalassets/products-pim-data/ke2-motorcycles/naked-bike/1290-super-duke-r2/1290-super-duke-r-2019/f9903s9/pho_bike_90_re.png',
      details: `THE BEAST is not about mincing words or pulling punches.
      Blunt, brutal and extreme - there is nothing tame about this hyper-naked bike.
      With an updated design, mega powerful 1301 cc V-twin engine and exceptional all-round handling,
      the KTM 1290 SUPER DUKE R commands respect.`,
      technicalDetails: {
        DISPLACEMENT: '1301 cm³',
        POWERINHP: '174 hp',
        POWERINKW: '130 kW',
        TORQUE: '141 Nm',
        DESIGN: '2-cylinder, 4-stroke, V 75°',
        STROKE: '71 mm'
      }
    },
    {
      model: 'KTM 790 DUKE 2019',
      type: 'naked',
      image:
        'https://www.ktm.com/globalassets/products-pim-data/ke2-motorcycles/naked-bike/790-duke2/790-duke-2019/f9603s6/pho_bike_90_re.png',
      details: `Developed from KTM’s offroad race DNA,
        the 790 ADVENTURE R is a serious offroad motorcycle equipped for extreme terrain.
        With the hardcore adventurer in mind, it balances the power of a twin,
        with the lightness and agility of a single-cylinder offroad bike,
        to open up new riding possibilities. It offers an impressive fuel range without compromising agility.`,
      technicalDetails: {
        DISPLACEMENT: '799 cm³',
        POWERINHP: '94 hp',
        POWERINKW: '70 kW',
        TORQUE: '88 Nm',
        DESIGN: '2-cylinder, 4-stroke, parallel twin',
        STROKE: '65.7 mm'
      }
    }
  ];
  constructor() {}
  getFakeMotors() {
    return this.fakeMotors;
  }
}
