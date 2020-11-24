import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPostsComponent } from './customers-posts.component';

describe('CustomersPostsComponent', () => {
  let component: CustomersPostsComponent;
  let fixture: ComponentFixture<CustomersPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
