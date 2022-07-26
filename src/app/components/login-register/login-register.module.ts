import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRegisterComponent} from './login-register.component';
import {FormsModule} from '@angular/forms';
import {CarouselItemModule} from '../carousel-item/carousel-item.module';
import {SwitchModule} from '../switch/switch.module';

@NgModule({
    declarations: [LoginRegisterComponent],
    imports: [CommonModule, FormsModule, CarouselItemModule, SwitchModule],
})
export class LoginRegisterModule {}
