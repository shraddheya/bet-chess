import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AichallengeComponent } from './aichallenge.component';

describe('AichallengeComponent', () => {
  let component: AichallengeComponent;
  let fixture: ComponentFixture<AichallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AichallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AichallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
