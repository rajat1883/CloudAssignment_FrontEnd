import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://10.48.1.5:8001/api/users');
  }

  addUser(user: any) {
    return this.http.post('http://10.48.1.5:8001/api/users', user, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  });
  }

}
