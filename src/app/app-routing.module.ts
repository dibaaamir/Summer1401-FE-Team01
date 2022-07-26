import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {LoginRegisterComponent} from './components/login-register/login-register.component';
import {ProfileComponent} from './components/profile/profile.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'auth', component: LoginRegisterComponent},
    {path: 'profile', component: ProfileComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
