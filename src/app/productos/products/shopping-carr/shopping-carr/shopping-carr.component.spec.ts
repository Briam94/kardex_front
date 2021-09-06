import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCarrComponent } from './shopping-carr.component';

describe('ShoppingCarrComponent', () => {
  let component: ShoppingCarrComponent;
  let fixture: ComponentFixture<ShoppingCarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
