import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//import Componentes
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
//import { PageNotFoundComponent } from './';
/*
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Name4Component } from './';

*/

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    /*{ path: 'path3', component: AppComponent },
    { path: '**', component: PageNotFoundComponent },
    { path: 'path4', component: Name4Component },
    
    */

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

/*
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
*/
//export class FeatureRoutingModule {}
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});