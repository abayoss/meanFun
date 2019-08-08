import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MilitaryService {
  constructor(private http: HttpClient) {}
  addBase(newbase) {
    return this.http.post(environment.ROOT_URL + '/private/bases', newbase);
  }
  getBases() {
    return this.http.get(environment.ROOT_URL + '/private/bases');
  }
  getBase(id) {
    return this.http.get(environment.ROOT_URL + '/private/bases/' + id);
  }
  editBase(id, newMotor) {
    return this.http.put(
      environment.ROOT_URL + '/private/bases/' + id,
      newMotor
    );
  }
}
