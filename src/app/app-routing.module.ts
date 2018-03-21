import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainpageComponent} from './mainpage/mainpage.component';
import {ParallaxComponent } from './parallax/parallax.component';
import {TotalskillComponent } from './skills/totalskill/totalskill.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {path: '', redirectTo: 'app-parallax', pathMatch: 'full'},
        {path: 'app-parallax', component: ParallaxComponent },
        {path: 'app-totalskill', component: TotalskillComponent }
    ])],
     exports: [RouterModule]
    })
    export class AppRoutingModule {}
