import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { ThanksService } from 'src/app/core/services/thanks.service';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.sass']
})
export class LayoutMainComponent implements OnInit {

  @ViewChild('templateModalThanks', { static: true }) templateModalThanks: any;
  modalThanksRef: BsModalRef;

  private modalThanksSubscription: Subscription;

  nameUser: string;

  constructor(
    private modalService: BsModalService,
    private thanksService: ThanksService
  ) { }

  ngOnInit() {
    this.modalThanksSubscription = this.thanksService.getObservable().subscribe(
      rslt => {
        console.log('this.thanksService.getObservable().subscribe => rslt', rslt);
        this.nameUser = null;
        if (rslt.name) {
          this.nameUser = rslt.name;
        }
        this._showModalThanks();
      }
    );
  }

  public showModalThanks() {
    this._showModalThanks();
  }

  private _showModalThanks() {
    this.modalThanksRef = this.modalService.show(this.templateModalThanks, {
      keyboard: true,
      ignoreBackdropClick: false,
      class: 'modal-dialog-centered modal-md'
    });
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.modalThanksSubscription.unsubscribe();
  }


}
