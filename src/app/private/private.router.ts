import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ActivityComponent } from './activity/activity.component';


const privateRoutes: Routes = [
    { path: '', component: PrivateComponent, 
        children: [
            { path: '', redirectTo: '/activity', pathMatch: 'full' },
            { path: 'activity', component: ActivityComponent },
            { path: 'edit-profile', component: EditProfileComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(privateRoutes)],
    exports: [ RouterModule ],
    providers: []
})

export class PrivateRoutingModule{}