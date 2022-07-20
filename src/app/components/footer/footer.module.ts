import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
    declarations: [FooterComponent],
    exports: [FooterComponent],
    imports: [CommonModule, RouterModule, AppRoutingModule],
})
export class FooterModule {}
