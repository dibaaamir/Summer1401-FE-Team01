import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';
import {SocialMediaComponent} from './components/social-media/social-media.component';

@NgModule({
    declarations: [FooterComponent, SocialMediaComponent],
    exports: [FooterComponent],
    imports: [CommonModule, RouterModule, AppRoutingModule],
})
export class FooterModule {}
