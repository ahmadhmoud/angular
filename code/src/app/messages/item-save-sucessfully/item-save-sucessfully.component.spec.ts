import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSaveSucessfullyComponent } from './item-save-sucessfully.component';

describe('ItemSaveSucessfullyComponent', () => {
  let component: ItemSaveSucessfullyComponent;
  let fixture: ComponentFixture<ItemSaveSucessfullyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSaveSucessfullyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSaveSucessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
