import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { CommentsService } from './comments.service';

@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: ReactiveFormComponent,
    //     data: {
    //       breadcrumbs:
    //         [
    //           'Comentarios'
    //         ]
    //     }
    //   }
    // ])
  ],
  exports: [
    ReactiveFormComponent
  ],
  providers: [
    CommentsService
  ]
})
export class CommentsModule { }
