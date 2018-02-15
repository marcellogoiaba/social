import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private.router';
import { PrivateComponent } from './private.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivityComponent } from './activity/activity.component';
import { EditProfileComponent} from './edit-profile/edit-profile.component';

@NgModule({
    imports: [
        CommonModule,
        PrivateRoutingModule,
        FormsModule
    ],
    declarations: [
        PrivateComponent,
        NavbarComponent,
        SidebarComponent,
        EditProfileComponent,
        ActivityComponent
    ],
    providers: []
})

export class PrivateModule {}