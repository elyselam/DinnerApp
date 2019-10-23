import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    winners: [];
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];


    foods = [       
        // tslint:disable-next-line: quotemark
        {image: "https://images.vexels.com/media/users/3/157209/isolated/preview/725aa2473489db2e550656210c557f18-cheesy-pizza-icon-by-vexels.png",
        name: "pizza",
        price: "$$",
        cuisine: "italian"},

        {image: "https://cdn3.iconfinder.com/data/icons/food-1-11/128/food-24-512.png",
        name: "noodles",
        price: "$$",
        cuisine: "chinese"
        }];







    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers();
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    addToWinners(){
        // this.winners.push()
        console.log("adding item to winners")
    }
}



