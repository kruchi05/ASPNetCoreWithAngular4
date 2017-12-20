import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';

import { RegistrationFormComponent } from './account/registration-form/registration-form.component'; //'./registration-form/registration-form.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { MainDashBoardComponent } from './dashboard/main-tile/main-tile.component';

import { UserService } from './shared/services/user.service';
import { ConfigService } from './shared/utils/config.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        RegistrationFormComponent,
        LoginFormComponent,
        MainDashBoardComponent
    ],
    providers: [UserService,
        ConfigService],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'register', component: RegistrationFormComponent },
            { path: 'login', component: LoginFormComponent },
            { path: 'main-tile', component: MainDashBoardComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
