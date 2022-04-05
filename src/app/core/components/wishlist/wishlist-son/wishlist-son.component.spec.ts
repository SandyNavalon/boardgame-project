import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistSonComponent } from './wishlist-son.component';

describe('WishlistSonComponent', () => {
  let component: WishlistSonComponent;
  let fixture: ComponentFixture<WishlistSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
