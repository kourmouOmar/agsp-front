import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentModulesComponent } from './parent-modules.component';

describe('ParentModulesComponent', () => {
  let component: ParentModulesComponent;
  let fixture: ComponentFixture<ParentModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
