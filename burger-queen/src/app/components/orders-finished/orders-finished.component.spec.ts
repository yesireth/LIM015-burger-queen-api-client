import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersFinishedComponent } from './orders-finished.component';

describe('OrdersFinishedComponent', () => {
  let component: OrdersFinishedComponent;
  let fixture: ComponentFixture<OrdersFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersFinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
