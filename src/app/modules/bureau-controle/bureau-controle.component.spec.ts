import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauControleComponent } from './bureau-controle.component';

describe('BureauControleComponent', () => {
  let component: BureauControleComponent;
  let fixture: ComponentFixture<BureauControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauControleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
