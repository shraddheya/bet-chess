import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadalgorithmComponent } from './uploadalgorithm.component';

describe('UploadalgorithmComponent', () => {
  let component: UploadalgorithmComponent;
  let fixture: ComponentFixture<UploadalgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadalgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadalgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
