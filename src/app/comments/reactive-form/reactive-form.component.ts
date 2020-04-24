import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ThanksService } from 'src/app/core/services/thanks.service';

import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {

  title: string;

  commentForm: FormGroup;

  maxLengthComment: number;

  fakeResponse: any;

  showLoadding: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private thanksService: ThanksService,
    private commentsService: CommentsService
  ) {
    this._constructor();
  }

  private _constructor(): void {

    this.title = 'Add comment';

    this.maxLengthComment = 30;

    this.fakeResponse = null;

    this.showLoadding = false;

    this.commentForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\D]*$/)
        ]],
      age: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]*$/)
        ]
      ],
      comment: [
        '',
        [
          Validators.required,
          Validators.maxLength(this.maxLengthComment)
        ]
      ]
    });
  }

  get invalidName(): boolean {
    return this.commentForm.get('name').invalid && (this.commentForm.get('name').dirty || this.commentForm.get('name').touched);
  }

  get invalidAge(): boolean {
    return this.commentForm.get('age').invalid && (this.commentForm.get('age').dirty || this.commentForm.get('age').touched);
  }

  get invalidComment(): boolean {
    return this.commentForm.get('comment').invalid && (this.commentForm.get('comment').dirty || this.commentForm.get('comment').touched);
  }

  ngOnInit(): void {

  }

  save(): Promise<any> {
    console.log('save', this.commentForm);
    if (this.commentForm.invalid) {
      Object.values(this.commentForm.controls).forEach(controll => controll.markAsTouched());
      return null;
    }

    this.showLoadding = true;

    return this.commentsService.save(this.commentForm.value).then(
      rslt => {
        setTimeout(() => {
          this.thanksService.showModal(rslt.data);
          this.showLoadding = false
        }, 1000);

        return rslt;
      },
      error => {
        console.log('this.commentsService.save => error', error);
      }
    );
  }

  executeFakeWS() {
    this.commentsService.excecutefakeWS().then(rslt => this.fakeResponse = rslt);
  }

}
