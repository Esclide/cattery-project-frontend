import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatteryComponent } from './cattery.component';

describe('CatteryComponent', () => {
  let component: CatteryComponent;
  let fixture: ComponentFixture<CatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
