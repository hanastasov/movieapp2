import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieAppRoutingModule } from './movie-app-routing.module';
import { MovieAppComponent } from './movie-app.component';
import { MoviesComponent } from './movies/movies.component';
import { IgxButtonModule, IgxRippleModule, IgxTabsModule, IgxCardModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxDatePickerModule, IgxListModule, IgxAvatarModule, IgxNavigationDrawerModule, IgxToggleModule, IgxDropDownModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MovieComplexComponent } from './movie-complex/movie-complex.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';

@NgModule({
  declarations: [
    MovieAppComponent,
    MoviesComponent,
    MovieComplexComponent,
    MyPurchasesComponent
  ],
  imports: [
    CommonModule,
    MovieAppRoutingModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxTabsModule,
    IgxCardModule,
    IgxIconModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxListModule,
    IgxAvatarModule,
    FormsModule,
    IgxNavigationDrawerModule,
    IgxToggleModule,
    IgxDropDownModule
  ]
})
export class MovieAppModule {
}
