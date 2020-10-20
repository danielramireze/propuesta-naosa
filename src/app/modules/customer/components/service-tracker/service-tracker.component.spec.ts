import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTrackerComponent } from './service-tracker.component';

describe('ServiceTrackerComponent', () => {
  let component: ServiceTrackerComponent;
  let fixture: ComponentFixture<ServiceTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
