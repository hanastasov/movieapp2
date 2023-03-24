import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxTabsModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxDatePickerModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxTabsModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxDatePickerModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
