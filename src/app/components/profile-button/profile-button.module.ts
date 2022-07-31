import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileButtonComponent} from './profile-button.component';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [ProfileButtonComponent],
    imports: [CommonModule, NgxPopperjsModule, RouterModule],
    exports: [ProfileButtonComponent],
})
export class ProfileButtonModule {}
