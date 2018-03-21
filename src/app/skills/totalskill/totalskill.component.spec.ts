import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalskillComponent } from './totalskill.component';

describe('TotalskillComponent', () => {
  let component: TotalskillComponent;
  let fixture: ComponentFixture<TotalskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
