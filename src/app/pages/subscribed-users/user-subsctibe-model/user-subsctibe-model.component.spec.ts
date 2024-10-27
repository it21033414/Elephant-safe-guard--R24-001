import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubsctibeModelComponent } from './user-subsctibe-model.component';

describe('UserSubsctibeModelComponent', () => {
  let component: UserSubsctibeModelComponent;
  let fixture: ComponentFixture<UserSubsctibeModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSubsctibeModelComponent]
    });
    fixture = TestBed.createComponent(UserSubsctibeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
