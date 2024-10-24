import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorByTypeComponent } from './selector-by-type.component';

describe('SelectorByTypeComponent', () => {
  let component: SelectorByTypeComponent;
  let fixture: ComponentFixture<SelectorByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorByTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
