import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOrganizatorComponent } from './navbar-organizator.component';

describe('NavbarOrganizatorComponent', () => {
  let component: NavbarOrganizatorComponent;
  let fixture: ComponentFixture<NavbarOrganizatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarOrganizatorComponent]
    });
    fixture = TestBed.createComponent(NavbarOrganizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
