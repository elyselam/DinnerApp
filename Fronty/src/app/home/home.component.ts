import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { Food } from '../models/food';
import { environment } from '../../environments/environment';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    winners: Food[] = [];
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    battle: Food[] = [];
    progress = 0;


    foods: Food[] = [];
        // // tslint:disable-next-line: quotemark
        // {image: "https://images.vexels.com/media/users/3/157209/isolated/preview/725aa2473489db2e550656210c557f18-cheesy-pizza-icon-by-vexels.png",
        // name: "pizza",
        // price: "$$",
        // cuisine: "italian"},

        // {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF7nsd9nupjTuUrnBk6CkK9hGBocMe-BqWxyXKmNvhJbHiA42&s",
        // name: "pancakes",
        // price: "$$",
        // cuisine: "italian"},

        // {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKagzoYlQvr8D8nPzqzXaScOQh5BVMtL_5oHvcyjzZ-q4-ng8&s",
        // name: "macaroni",
        // price: "$$",
        // cuisine: "italian"},

        // {image: "https://cdn3.iconfinder.com/data/icons/food-1-11/128/food-24-512.png",
        // name: "noodles",
        // price: "$$",
        // cuisine: "chinese"},

        // {image: "https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg",
        // name: "pancakes",
        // price: "$$",
        // cuisine: "italian"},

        // {image: "https://annarborfamily.com/wp-content/uploads/2018/11/pot-stickers.jpg",
        // name: "dumplings",
        // price: "$$",
        // cuisine: "chinese"
        // }];







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
        fetch(environment.baseUrl + 'funs/one')
        .then(response => response.json())
        .then(doops => this.battle = doops);
        console.log(this.battle);
        this.battle.push(this.foods[0]);
        this.battle.push(this.foods[1]);

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

    addToWinners(food){
        console.log(food);
        this.progress++;
        if (this.progress === 4) {
          //TODO navigate
        }
        else {
          this.nextDoops();
        }


    }

    nextDoops() {
      this.foods.splice(0,2);
      this.battle.splice(0,2);
      this.battle.push(this.foods[0]);
      this.battle.push(this.foods[1]);
    }
}



