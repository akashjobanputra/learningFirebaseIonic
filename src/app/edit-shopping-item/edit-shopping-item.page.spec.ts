import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShoppingItemPage } from './edit-shopping-item.page';

describe('EditShoppingItemPage', () => {
  let component: EditShoppingItemPage;
  let fixture: ComponentFixture<EditShoppingItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShoppingItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShoppingItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
