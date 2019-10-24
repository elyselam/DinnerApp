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
    secondo: Food[] = [];
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    battle: Food[] = [];
    progress = 0;
    step = false;


    foods: Food[] = [];
        // tslint:disable-next-line: quotemark
        // {link: "https://images.vexels.com/media/users/3/157209/isolated/preview/725aa2473489db2e550656210c557f18-cheesy-pizza-icon-by-vexels.png",
        // name: "pizza"},

        // {link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF7nsd9nupjTuUrnBk6CkK9hGBocMe-BqWxyXKmNvhJbHiA42&s",
        // name: "pancakes"},

        // {link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKagzoYlQvr8D8nPzqzXaScOQh5BVMtL_5oHvcyjzZ-q4-ng8&s",
        // name: "macaroni"},

        // {link: "https://cdn3.iconfinder.com/data/icons/food-1-11/128/food-24-512.png",
        // name: "noodles"},

        // {link: "https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg",
        // name: "pancakes"},

        // {link: "https://annarborfamily.com/wp-content/uploads/2018/11/pot-stickers.jpg",
        // name: "dumplings"
        // }







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
        fetch(environment.baseUrl + '/funs/one', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        }, })
        .then(response => response.json())
        .then(doops => this.processStuff(doops));
        this.progress = 0;


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
        this.winners.push(food);
        console.log("tickles");
        ++this.progress;
        console.log(this.progress);
        console.log("tickles");
        if(this.progress === 3) {
          console.log("butttttsex");
          console.log(this.winners);
          this.step = true;
          console.log(this.step);
          this.getSecondRound(this.winners);
        }
        else {
          this.nextDoops();
        }


    }

    addToSecondo(food){
      console.log(food);
      this.winners.push(food);
      this.progress++;
      if (this.progress === 4) {
        console.log(this.winners);
        this.step = true;
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

    processStuff(arrrrr) {
      this.foods = arrrrr;
      this.battle.push(this.foods[0]);
      this.battle.push(this.foods[1]);
      console.log(this.battle);
    }

    getSecondRound(win) {
      this.battle = [];
      fetch(environment.baseUrl + '/funs/two', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: win })
        .then(response => response.json())
        .then(doops => this.processStuff(doops));

    }
}
