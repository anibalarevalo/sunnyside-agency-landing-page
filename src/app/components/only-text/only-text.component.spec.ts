import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyTextComponent } from './only-text.component';

describe('OnlyTextComponent', () => {
  let component: OnlyTextComponent;
  let fixture: ComponentFixture<OnlyTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyTextComponent]
    });
    fixture = TestBed.createComponent(OnlyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
