import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamesFinderComponent } from './boardgames-finder.component';

describe('BoardgamesFinderComponent', () => {
  let component: BoardgamesFinderComponent;
  let fixture: ComponentFixture<BoardgamesFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardgamesFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgamesFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


