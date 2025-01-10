import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitpagePage } from './initpage.page';

describe('InitpagePage', () => {
  let component: InitpagePage;
  let fixture: ComponentFixture<InitpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InitpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
