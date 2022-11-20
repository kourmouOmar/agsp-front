import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBureauControleComponent } from './add-bureau-controle.component';

describe('AddBureauControleComponent', () => {
  let component: AddBureauControleComponent;
  let fixture: ComponentFixture<AddBureauControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBureauControleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBureauControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
