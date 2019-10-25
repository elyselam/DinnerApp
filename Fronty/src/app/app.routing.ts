import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { Login2Component } from './login2/login2/login2.component';
import { Register2Component } from './register2/register2/register2.component';
import { ContextComponent } from './context/context/context.component';
import { PrefComponent } from './pref/pref/pref.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login2', component: Login2Component },
    { path: 'register', component: Register2Component},
    { path: 'context', component: ContextComponent},
    { path: 'pref', component: PrefComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: 'login2' }
];

export const routing = RouterModule.forRoot(appRoutes);
