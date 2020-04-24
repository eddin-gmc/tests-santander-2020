import { Component, OnInit, ViewChild } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.sass']
})
export class HomeMainComponent implements OnInit {

  @ViewChild('templateModalCommentForm', { static: true }) templateModalCommentForm: any;
  modalFormShareRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {

  }

  showModalCommentForm($event: MouseEvent) {
    $event.preventDefault();
    this._showModalCommentForm();
  }

  private _showModalCommentForm() {
    this.modalFormShareRef = this.modalService.show(this.templateModalCommentForm, {
      keyboard: true, 
      ignoreBackdropClick: false,
      class: 'modal-dialog-centered modal-lg'
    });
  }

}
