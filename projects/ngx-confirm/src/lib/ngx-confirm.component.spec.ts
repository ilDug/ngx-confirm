import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxConfirmComponent } from './ngx-confirm.component';

describe('NgxConfirmComponent', () => {
  let component: NgxConfirmComponent;
  let fixture: ComponentFixture<NgxConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
