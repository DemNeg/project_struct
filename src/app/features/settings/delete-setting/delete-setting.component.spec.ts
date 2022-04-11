import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSettingComponent } from './delete-setting.component';

describe('DeleteSettingComponent', () => {
  let component: DeleteSettingComponent;
  let fixture: ComponentFixture<DeleteSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
