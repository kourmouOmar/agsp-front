import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBureauEtudeComponent } from './add-bureau-etude.component';

describe('AddBureauEtudeComponent', () => {
  let component: AddBureauEtudeComponent;
  let fixture: ComponentFixture<AddBureauEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBureauEtudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBureauEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
