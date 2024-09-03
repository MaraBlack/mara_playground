import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsToPaperComponent } from './dreams-to-paper.component';

describe('DreamsToPaperComponent', () => {
  let component: DreamsToPaperComponent;
  let fixture: ComponentFixture<DreamsToPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamsToPaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreamsToPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
