import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    currentUser: User;

    constructor(
        private router: Router,
        //subscribes to this.authenticationService.currentUser observable
        //updates currentUser when user logs in/out
        private authenticationService: AuthenticationService) {
            //
    }

    ngOnInit() {
        this.router.navigate
    }

    logout() {
    }
}
