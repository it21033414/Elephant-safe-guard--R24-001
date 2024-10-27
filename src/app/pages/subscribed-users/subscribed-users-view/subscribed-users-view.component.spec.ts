import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedUsersViewComponent } from './subscribed-users-view.component';

describe('SubscribedUsersViewComponent', () => {
  let component: SubscribedUsersViewComponent;
  let fixture: ComponentFixture<SubscribedUsersViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribedUsersViewComponent]
    });
    fixture = TestBed.createComponent(SubscribedUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
