import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
//import { StudentListComponent } from './students/student-list/student-list.component';

const routes: Routes = [
  { path: 'tickets', component: TicketListComponent},
  { path: 'ticketform', component: TicketFormComponent},
  //{ path: 'students', component: StudentListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
