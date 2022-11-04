import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheUserComponent } from './fiche-user.component';

describe('FicheUserComponent', () => {
  let component: FicheUserComponent;
  let fixture: ComponentFixture<FicheUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
