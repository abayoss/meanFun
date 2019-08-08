import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  constructor(private httpC: HttpClient) {}
  addMotor(newMotor) {
    return this.httpC.post(environment.ROOT_URL + '/public/motors', newMotor);
  }
  getMotors() {
    return this.httpC.get(environment.ROOT_URL + '/public/motors');
  }
  getMotor(id) {
    return this.httpC.get(environment.ROOT_URL + '/public/motors/' + id);
  }
  editMotor(id, newMotor) {
    return this.httpC.put(
      environment.ROOT_URL + '/public/motors/' + id,
      newMotor
    );
  }
}
