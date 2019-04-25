import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getHeader() {
    const token = this.authService.loadToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    return httpOptions;
  }

  getIssues() {
    return this.http.get(`http://localhost:3000/api-jira/data/0/100`, this.getHeader());
  }

  getStatus() {
    return this.http.get(`http://localhost:3000/api-jira/data/0/100`);
  }
}
