import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorByClassComponent } from './selector-by-class.component';

describe('SelectorByClassComponent', () => {
  let component: SelectorByClassComponent;
  let fixture: ComponentFixture<SelectorByClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorByClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
