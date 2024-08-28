import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLoadingScreenComponent } from './grid-loading-screen.component';

describe('GridLoadingScreenComponent', () => {
  let component: GridLoadingScreenComponent;
  let fixture: ComponentFixture<GridLoadingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLoadingScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridLoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
