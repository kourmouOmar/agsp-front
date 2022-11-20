import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauEtudeComponent } from './bureau-etude.component';

describe('BureauEtudeComponent', () => {
  let component: BureauEtudeComponent;
  let fixture: ComponentFixture<BureauEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauEtudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
