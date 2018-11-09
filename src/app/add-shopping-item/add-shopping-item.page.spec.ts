import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingItemPage } from './add-shopping-item.page';

describe('AddShoppingItemPage', () => {
  let component: AddShoppingItemPage;
  let fixture: ComponentFixture<AddShoppingItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoppingItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
