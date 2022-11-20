import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheChantierComponent } from './fiche-chantier.component';

describe('FicheChantierComponent', () => {
  let component: FicheChantierComponent;
  let fixture: ComponentFixture<FicheChantierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheChantierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
