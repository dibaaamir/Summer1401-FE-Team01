import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {CarouselItemModule} from '../carousel-item/carousel-item.module';
import {SwitchModule} from '../switch/switch.module';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

@NgModule({
    declarations: [AuthComponent, LoginComponent, RegisterComponent],
    imports: [CommonModule, FormsModule, CarouselItemModule, SwitchModule],
})
export class AuthModule {}
