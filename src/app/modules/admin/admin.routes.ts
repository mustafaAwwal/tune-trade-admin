import { Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTokenListComponent } from './admin-token-list/admin-token-list.component';
import { AuthCanActivateGuardService } from 'src/app/shared/guards/auth.can-activate.guard/auth-can-activate-guard.service';



export const adminRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: AdminViewComponent,
        canActivate: [AuthCanActivateGuardService],
        children: [
            {
                path: '',
                component: AdminHomeComponent
            },
            {
                path: 'list',
                component: AdminTokenListComponent
            }
        ]
    }
];
