import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorByAttrComponent } from './selector-by-attr.component';

describe('SelectorByAttrComponent', () => {
  let component: SelectorByAttrComponent;
  let fixture: ComponentFixture<SelectorByAttrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorByAttrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorByAttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
