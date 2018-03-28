import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsotopComponent } from './isotop.component';

describe('IsotopComponent', () => {
  let component: IsotopComponent;
  let fixture: ComponentFixture<IsotopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsotopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsotopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
