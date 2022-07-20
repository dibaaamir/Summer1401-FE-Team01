import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './components/categories/categories.component';
import {HomeComponent} from './home.component';
import {HeaderModule} from '../../components/header/header.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [HomeComponent, CategoriesComponent],
    imports: [CommonModule, HeaderModule, RouterModule],
})
export class HomeModule {}
