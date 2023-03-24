import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAppComponent } from './movie-app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComplexComponent } from './movie-complex/movie-complex.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';

const routes: Routes = [{ path: '', component: MovieAppComponent, children: [{ path: '', redirectTo: 'movies', pathMatch: 'full' }, { path: 'movies', component: MoviesComponent, data: { text: 'Movies' } }, { path: 'movie-complex', component: MovieComplexComponent, data: { text: 'Movie Complex' } }, { path: 'my-purchases', component: MyPurchasesComponent, data: { text: 'My Purchases' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieAppRoutingModule {
}
