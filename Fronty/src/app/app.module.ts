import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }from './app.component';
import { routing }from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { ImageBoxComponent } from './image-box/image-box.component';


import { ClickableCuisineComponent } from './clickable-cuisine/clickable-cuisine.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { FinalComponent } from './fin/final/final.component';
import { Login2Component } from './login2/login2/login2.component';
import { Register2Component } from './register2/register2/register2.component';
import { ContextComponent } from './context/context/context.component';
import { PrefComponent } from './pref/pref/pref.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        ImageBoxComponent,
        CuisinesComponent,
        ClickableCuisineComponent,
        FinalComponent,
        Login2Component,
        Register2Component,
        ContextComponent,
        PrefComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
