import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexInvoicesComponent } from './index-invoices.component';

describe('IndexInvoicesComponent', () => {
  let component: IndexInvoicesComponent;
  let fixture: ComponentFixture<IndexInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
