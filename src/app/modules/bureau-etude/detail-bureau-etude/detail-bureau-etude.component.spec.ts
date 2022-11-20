import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBureauEtudeComponent } from './detail-bureau-etude.component';

describe('DetailBureauEtudeComponent', () => {
  let component: DetailBureauEtudeComponent;
  let fixture: ComponentFixture<DetailBureauEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBureauEtudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBureauEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
