import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyImageComponent } from './only-image.component';

describe('OnlyImageComponent', () => {
  let component: OnlyImageComponent;
  let fixture: ComponentFixture<OnlyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyImageComponent]
    });
    fixture = TestBed.createComponent(OnlyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
