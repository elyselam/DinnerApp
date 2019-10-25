import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginsService } from 'src/app/logins.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  loginForm: FormGroup;
  constructor(private http: HttpClient, private loginS: LoginsService, private router: Router
              // private authService: AuthService
              ) { }

  ngOnInit() {
    this.initializeForm();

  }

  initializeForm(){
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    let loginCredentials = this.loginForm.value;
    this.login(loginCredentials)


      // inside of login method needs to have a post request to your login endpoint at minimum
      /* this.http.post(".../login", loginCredentials).subscribe(response =>{
            console.log(response);
      }, error => {
            console.log(error)
       }) */

  }

  login(loginCredentials){
    this.http.post(environment.baseUrl + '/login/authentication', loginCredentials).subscribe(response =>{
      this.loginS.loggedInUser.next(response);
      this.router.navigate(["/home"]);

    }, error => {
      console.log(error);

  })

}
}
