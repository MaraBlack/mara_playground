import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAnimationsComponent } from './small-animations.component';

describe('SmallAnimationsComponent', () => {
  let component: SmallAnimationsComponent;
  let fixture: ComponentFixture<SmallAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallAnimationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
