import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {CarouselItemModule} from '../carousel-item/carousel-item.module';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {LogoModule} from '../logo/logo.module';

@NgModule({
    declarations: [AuthComponent, LoginComponent, RegisterComponent],
    imports: [CommonModule, FormsModule, CarouselItemModule, LogoModule],
})
export class AuthModule {}
