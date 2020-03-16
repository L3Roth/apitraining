import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchcardsnewComponent } from './matchcardsnew.component';

describe('MatchcardsnewComponent', () => {
  let component: MatchcardsnewComponent;
  let fixture: ComponentFixture<MatchcardsnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchcardsnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchcardsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
