import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgracInterfaceComponent } from './igrac-interface.component';

describe('IgracInterfaceComponent', () => {
  let component: IgracInterfaceComponent;
  let fixture: ComponentFixture<IgracInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgracInterfaceComponent]
    });
    fixture = TestBed.createComponent(IgracInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
