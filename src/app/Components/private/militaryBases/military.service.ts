import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders().set('Authorization', 'barrer auth-token');
    return this.http.get(environment.ROOT_URL + '/private/bases', {headers});
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
