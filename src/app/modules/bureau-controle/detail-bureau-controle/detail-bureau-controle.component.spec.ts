import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBureauControleComponent } from './detail-bureau-controle.component';

describe('DetailBureauControleComponent', () => {
  let component: DetailBureauControleComponent;
  let fixture: ComponentFixture<DetailBureauControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBureauControleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBureauControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
