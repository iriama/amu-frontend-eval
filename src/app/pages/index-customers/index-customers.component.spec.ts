import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCustomersComponent } from './index-customers.component';

describe('IndexCustomersComponent', () => {
  let component: IndexCustomersComponent;
  let fixture: ComponentFixture<IndexCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
