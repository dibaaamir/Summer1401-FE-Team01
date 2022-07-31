import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {LogoModule} from '../logo/logo.module';
import {CarouselItemModule} from '../carousel-item/carousel-item.module';
import {NgxPopperjsModule} from 'ngx-popperjs';

@NgModule({
    declarations: [HeaderComponent, SearchBoxComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, RouterModule, FormsModule, LogoModule, CarouselItemModule, NgxPopperjsModule],
})
export class HeaderModule {}
