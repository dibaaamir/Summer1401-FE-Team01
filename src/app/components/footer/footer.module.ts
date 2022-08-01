import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';
import {CarouselItemModule} from '../carousel-item/carousel-item.module';

@NgModule({
    declarations: [FooterComponent],
    exports: [FooterComponent],
    imports: [CommonModule, RouterModule, AppRoutingModule, CarouselItemModule],
})
export class FooterModule {}
