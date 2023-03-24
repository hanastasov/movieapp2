import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MasterViewComponent } from './master-view/master-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movie-app', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'movie-app', loadChildren: () => import('./movie-app/movie-app.module').then(m => m.MovieAppModule) },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
