import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesasDetailComponent } from './sobremesas-detail.component';

describe('SobremesasDetailComponent', () => {
  let component: SobremesasDetailComponent;
  let fixture: ComponentFixture<SobremesasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremesasDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremesasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
