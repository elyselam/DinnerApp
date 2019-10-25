import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    //dependencies that are required by component, automaticcaly injected when component is created
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    //run once after componenet is created

    ngOnInit() {
        //creates new FormGroup and assign it to this.loginForm prop
        this.loginForm = this.formBuilder.group({
            //params passed into FormBuilder tell it to create 2 form controls: username & password
            //initalized with "" and set to required
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        //lets you redirect user back to original page before logging in
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }



    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        //authenticationService returns an Observable that we subscribe() for the results of authentication
        
        this.authenticationService.login(this.f.username.value, this.f.password.value)
        
            //after the first value is emitted, pipe(first()) unsubscribes from the observable immediately
            .pipe(first())
            .subscribe(
                data => {
                    //on success, user is redirected to returnUrl by:
                    this.router.navigate([this.returnUrl]);
                },
                //on fail, the error message is stored in this.error
                error => {
                    this.alertService.error(error);
                    //and loading prop is reset back to false
                    this.loading = false;
                });
    }
}
