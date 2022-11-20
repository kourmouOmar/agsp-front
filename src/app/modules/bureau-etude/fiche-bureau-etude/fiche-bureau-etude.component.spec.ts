import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBureauEtudeComponent } from './fiche-bureau-etude.component';

describe('FicheBureauEtudeComponent', () => {
  let component: FicheBureauEtudeComponent;
  let fixture: ComponentFixture<FicheBureauEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheBureauEtudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheBureauEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
