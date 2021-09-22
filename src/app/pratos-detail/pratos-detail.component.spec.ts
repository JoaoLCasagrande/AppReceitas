import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratosDetailComponent } from './pratos-detail.component';

describe('PratosDetailComponent', () => {
  let component: PratosDetailComponent;
  let fixture: ComponentFixture<PratosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PratosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
