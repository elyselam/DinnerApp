import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { Food } from '../models/food';
import { environment } from '../../environments/environment';
import { stringify } from '@angular/compiler/src/util';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    winners: Food[] = [];
    secondo: Food[] = [];
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    battle: Food[] = [];
    progress = 0;
    step = 0;
    recs: string[] = [];
    reccy: Food;
    prime: string;


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
        ++this.progress;
        console.log(this.progress);
        if(this.progress === 4) {
          console.log(this.winners);
          this.step++;
          this.progress = 0;
          this.getSecondRound(this.winners);
        }
        else {
          this.nextDoops();
        }


    }

    addToSecondo(food){
      this.secondo.push(food);
      this.progress++;
      if (this.progress === 4) {
        console.log(this.winners);
        this.step++;
        this.battle = [];
        this.prepareFinal();
        console.log(this.recs)
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

    prepareFinal() {
      fetch(environment.baseUrl + '/preference/findPreferences', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
      // body: this.currentUser
    });
      this.sumUp();
      this.prime = this.primeRec();

      fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyB190V6L_hdgXp8PJtbbPr5Tb0eJ16GYeA&input=" + encodeURI(this.prime) + "&inputtype=textquery&fields=formatted_address",{
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        }, })
        .then(response => response.json())
        .then(place => this.recs.push(encodeURI(place.candidates.formatted_address)));
      this.winners.forEach(element => {
        fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyB190V6L_hdgXp8PJtbbPr5Tb0eJ16GYeA&input=" + encodeURI(element.name) + "&inputtype=textquery&fields=formatted_address",{
          method: 'Post',
          headers: {
              'Content-Type': 'application/json'
          }, })
          .then(response => response.json())
          .then(place => this.recs.push(encodeURI(place.candidates.formatted_address)));
      });
    }

    sumUp() {
      this.winners.forEach ( element => this.reccy.combine(element) );

  }

    primeRec() {
      const xo = Object.entries(this.reccy);
      let max = 0;
      let type = '';
      for (const key of xo) {
        if (key[1] > max) {
          max = key[1];
          type = key[0];
        }
      }
      return type;
    }
}


