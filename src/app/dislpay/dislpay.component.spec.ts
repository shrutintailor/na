import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislpayComponent } from './dislpay.component';

describe('DislpayComponent', () => {
  let component: DislpayComponent;
  let fixture: ComponentFixture<DislpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
