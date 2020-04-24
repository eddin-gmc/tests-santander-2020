import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { CommentsModule } from '../comments/comments.module';

import { HomeMainComponent } from './main/home-main.component';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [
    CommonModule,

    ModalModule.forRoot(),
    CarouselModule.forRoot(),

    CommentsModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomeMainComponent,
        data: {
          breadcrumbs:
            [
              'Inicio'
            ]
        }
      }
    ])
  ]
})
export class HomeModule { }
