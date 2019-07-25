import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminTokenListComponent } from './admin-token-list/admin-token-list.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { AdminListTokenViewComponent } from './viewComponents/admin-list-token-view/admin-list-token-view.component';
import { AdminTokenViewComponent } from './viewComponents/admin-token-view/admin-token-view.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SideNavComponent } from 'src/app/shared/components/side-nav/side-nav.component';

// Font Awesome Imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
// Icons imports
import { faUser, faUserCircle, faCogs, faColumns, faArrowLeft, faList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { TokenTableComponent } from './admin-token-list/tables/token-table/token-table.component';
import { LiveTokenTableComponent } from './admin-token-list/tables/live-token-table/live-token-table.component';


@NgModule({
    declarations: [
    AdminViewComponent,
    AdminHomeComponent,
    AdminTokenListComponent,
    AdminListTokenViewComponent,
    AdminTokenViewComponent,
    HeaderComponent,
    SideNavComponent,
    TokenTableComponent,
    LiveTokenTableComponent
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
