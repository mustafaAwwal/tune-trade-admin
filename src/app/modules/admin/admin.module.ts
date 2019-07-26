import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTokenListComponent } from './admin-token-list/admin-token-list.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { AdminListTokenViewComponent } from './admin-token-list/tables/token-table/admin-list-token-view/admin-list-token-view.component';
import { AdminTokenViewComponent } from './admin-home/admin-token-view/admin-token-view.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SideNavComponent } from 'src/app/shared/components/side-nav/side-nav.component';

// Font Awesome Imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
// Icons imports
import { faUser, faUserCircle, faCogs, faColumns, faArrowLeft, faList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { TokenTableComponent } from './admin-token-list/tables/token-table/token-table.component';
import { LiveTokenTableComponent } from './admin-token-list/tables/live-token-table/live-token-table.component';
import { AdminOutletComponent } from './admin-outlet/admin-outlet.component';
import { LiveTokenViewComponent } from './admin-token-list/tables/live-token-table/live-token-view/live-token-view.component';


@NgModule({
    declarations: [
    AdminHomeComponent,
    AdminTokenListComponent,
    AdminListTokenViewComponent,
    AdminTokenViewComponent,
    HeaderComponent,
    SideNavComponent,
    TokenTableComponent,
    LiveTokenTableComponent,
    AdminOutletComponent,
    LiveTokenViewComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild(adminRoutes)
    ],
})
export class AdminModule {
    constructor() {
        library.add(
          faUserCircle,
          faUser,
          faCogs,
          faColumns,
          faArrowLeft,
          faList,
          faSignOutAlt
        )
    }

}
