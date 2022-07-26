import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarouselModule} from './components/carousel/carousel.module';

import {HeaderModule} from './components/header/header.module';

import {HomeModule} from './pages/home/home.module';
import {SnackbarComponent} from './components/snackbar/snackbar.component';

import {LoginRegisterModule} from './components/login-register/login-register.module';
import {ProfileModule} from './components/profile/profile.module';

@NgModule({
    declarations: [AppComponent, SnackbarComponent],
    imports: [
        BrowserModule,
        CarouselModule,
        AppRoutingModule,
        HeaderModule,
        HomeModule,
        LoginRegisterModule,
        ProfileModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
