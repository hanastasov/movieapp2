import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxNavigationDrawerModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule } from '@infragistics/igniteui-angular';
import { MovieAppComponent } from './movie-app.component';

describe('MovieAppComponent', () => {
  let component: MovieAppComponent;
  let fixture: ComponentFixture<MovieAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAppComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxNavigationDrawerModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxToggleModule, IgxDropDownModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
