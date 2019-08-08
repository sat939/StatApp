import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchRecordsComponent } from './match-records.component';

describe('MatchRecordsComponent', () => {
  let component: MatchRecordsComponent;
  let fixture: ComponentFixture<MatchRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
