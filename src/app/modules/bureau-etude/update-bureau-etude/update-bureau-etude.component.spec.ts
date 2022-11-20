import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBureauEtudeComponent } from './update-bureau-etude.component';

describe('UpdateBureauEtudeComponent', () => {
  let component: UpdateBureauEtudeComponent;
  let fixture: ComponentFixture<UpdateBureauEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBureauEtudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBureauEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
