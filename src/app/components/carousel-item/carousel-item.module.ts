import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselItemComponent} from './carousel-item.component';
import {FormsModule} from '@angular/forms';
import {ButtonComponent} from '../button/button.component';

@NgModule({
    declarations: [CarouselItemComponent, ButtonComponent],
    exports: [CarouselItemComponent, ButtonComponent],
    imports: [CommonModule, FormsModule],
})
export class CarouselItemModule {}
