import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmplyoeeComponent } from './update-emplyoee.component';

describe('UpdateEmplyoeeComponent', () => {
  let component: UpdateEmplyoeeComponent;
  let fixture: ComponentFixture<UpdateEmplyoeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmplyoeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmplyoeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
