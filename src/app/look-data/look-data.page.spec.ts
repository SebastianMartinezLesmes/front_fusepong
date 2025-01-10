import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LookDataPage } from './look-data.page';

describe('LookDataPage', () => {
  let component: LookDataPage;
  let fixture: ComponentFixture<LookDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LookDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
