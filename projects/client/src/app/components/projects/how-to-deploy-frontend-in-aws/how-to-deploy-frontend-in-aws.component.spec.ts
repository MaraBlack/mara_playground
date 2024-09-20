import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToDeployFrontendInAwsComponent } from './how-to-deploy-frontend-in-aws.component';

describe('HowToDeployFrontendInAwsComponent', () => {
  let component: HowToDeployFrontendInAwsComponent;
  let fixture: ComponentFixture<HowToDeployFrontendInAwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToDeployFrontendInAwsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowToDeployFrontendInAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
