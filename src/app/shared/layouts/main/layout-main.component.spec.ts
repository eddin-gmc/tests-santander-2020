import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { LayoutMainComponent } from './layout-main.component';

import { ThanksService } from 'src/app/core/services/thanks.service';

describe('LayoutMainComponent', () => {
  let component: LayoutMainComponent;
  let fixture: ComponentFixture<LayoutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LayoutMainComponent
      ],
      imports: [
        ModalModule.forRoot()
      ],
      providers: [
        BsModalService,
        ThanksService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
