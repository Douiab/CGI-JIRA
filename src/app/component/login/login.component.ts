import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth/auth.service';
import { JiraService } from 'src/app/service/jira/jira.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user: User = {
    username: '',
    password: ''
  };

  constructor(private jiraService: JiraService, private authService: AuthService,
              private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.user = this.registerForm.value;
    this.authService.storeUserData(this.user);
    this.router.navigate(['']);
    // this.authService.getLogin(this.user).subscribe((data: any) => {
    //   console.log(data);
    //   if (data.idToken) {
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value.username));
    //     this.authService.storeUserData(data.idToken);
    //     console.log(data.idToken);
    //     this.router.navigate(['']);
    //   } else {
    //     alert('Invalid \n\n');
    //     console.log(data.msg);
    //     this.router.navigate(['login']);
    //   }
    // });
  }

}
