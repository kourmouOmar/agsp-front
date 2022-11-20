import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBureauControleComponent } from './fiche-bureau-controle.component';

describe('FicheBureauControleComponent', () => {
  let component: FicheBureauControleComponent;
  let fixture: ComponentFixture<FicheBureauControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheBureauControleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheBureauControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
