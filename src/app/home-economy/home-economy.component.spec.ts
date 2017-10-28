import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEconomyComponent } from './home-economy.component';

describe('HomeEconomyComponent', () => {
  let component: HomeEconomyComponent;
  let fixture: ComponentFixture<HomeEconomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEconomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
