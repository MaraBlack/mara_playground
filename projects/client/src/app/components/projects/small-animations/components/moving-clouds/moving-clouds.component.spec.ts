import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingCloudsComponent } from './moving-clouds.component';

describe('MovingCloudsComponent', () => {
  let component: MovingCloudsComponent;
  let fixture: ComponentFixture<MovingCloudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingCloudsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovingCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
