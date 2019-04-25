import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string;

  constructor(private http: HttpClient) { }

  getLogin(user: User) {
    // return this.http.post(`http://localhost:4444/auth`, { username: user.username, password: user.password });
  }

  storeUserData(user) {
    this.authToken =  window.btoa(user.username + ':' + user.password);
    localStorage.setItem('token', this.authToken);
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadToken() {
    const token = localStorage.getItem('token');
    return this.authToken = token;
  }

  loggedIn() {
    return this.authToken;
  }

  logout() {
    this.authToken = null;
    localStorage.clear();
  }
}
