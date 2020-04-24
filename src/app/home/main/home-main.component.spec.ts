import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { HomeMainComponent } from './home-main.component';

describe('HomeMainComponent', () => {
  let component: HomeMainComponent;
  let fixture: ComponentFixture<HomeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeMainComponent],
      imports: [ModalModule.forRoot()],
      providers: [BsModalService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
