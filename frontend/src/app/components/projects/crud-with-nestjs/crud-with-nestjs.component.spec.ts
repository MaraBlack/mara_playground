import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudWithNestjsComponent } from './crud-with-nestjs.component';

describe('CrudWithNestjsComponent', () => {
  let component: CrudWithNestjsComponent;
  let fixture: ComponentFixture<CrudWithNestjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudWithNestjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudWithNestjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
