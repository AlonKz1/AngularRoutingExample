import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KefelComponent } from './kefel.component';

describe('KefelComponent', () => {
  let component: KefelComponent;
  let fixture: ComponentFixture<KefelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KefelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KefelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
