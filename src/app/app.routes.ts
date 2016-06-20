import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login/';
import { MainComponent } from './main/';
import { NotfoundComponent } from './notfound/';

export const routes: RouterConfig = [
    { path: '/login', component: LoginComponent},
    { path: '/main', component: MainComponent },
    { path: '/404', component: NotfoundComponent, index: true }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
