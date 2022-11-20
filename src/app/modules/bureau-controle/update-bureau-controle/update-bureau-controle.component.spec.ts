import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBureauControleComponent } from './update-bureau-controle.component';

describe('UpdateBureauControleComponent', () => {
  let component: UpdateBureauControleComponent;
  let fixture: ComponentFixture<UpdateBureauControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBureauControleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBureauControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
