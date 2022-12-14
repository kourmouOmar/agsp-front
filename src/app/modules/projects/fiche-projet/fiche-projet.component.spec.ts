import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProjetComponent } from './fiche-projet.component';

describe('FicheProjetComponent', () => {
  let component: FicheProjetComponent;
  let fixture: ComponentFixture<FicheProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
