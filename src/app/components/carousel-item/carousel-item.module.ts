import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselItemComponent} from './carousel-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [CarouselItemComponent],
    exports: [CarouselItemComponent],
    imports: [CommonModule, FormsModule],
})
export class CarouselItemModule {}
