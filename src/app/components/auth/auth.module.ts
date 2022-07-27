import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {CarouselItemModule} from '../carousel-item/carousel-item.module';
import {SwitchModule} from '../switch/switch.module';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, FormsModule, CarouselItemModule, SwitchModule],
})
export class AuthModule {}
