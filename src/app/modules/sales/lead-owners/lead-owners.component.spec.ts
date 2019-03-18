import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadOwnersComponent } from './lead-owners.component';

describe('LeadOwnersComponent', () => {
  let component: LeadOwnersComponent;
  let fixture: ComponentFixture<LeadOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
