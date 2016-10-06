// app.routing.ts
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
//  { path: 'admin', component: AdminComponent },
  { path: 'client', component: ClientComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

