import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosItemComponent } from './heros-item.component';

describe('HerosItemComponent', () => {
  let component: HerosItemComponent;
  let fixture: ComponentFixture<HerosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
