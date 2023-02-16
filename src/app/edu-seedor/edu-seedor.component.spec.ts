import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduSeedorComponent } from './edu-seedor.component';

describe('EduSeedorComponent', () => {
  let component: EduSeedorComponent;
  let fixture: ComponentFixture<EduSeedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduSeedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduSeedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
