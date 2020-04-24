import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { LayoutMainComponent } from './main/layout-main.component';
import { LayoutMainFooterComponent } from './footer/layout-main-footer.component';

@NgModule({
  declarations: [
    LayoutMainComponent,
    LayoutMainFooterComponent
  ],
  imports: [
    CommonModule,

    ModalModule.forRoot(),
    
    RouterModule
  ],
  exports: [
    LayoutMainComponent,
    LayoutMainFooterComponent
  ],
})
export class LayoutsModule { }
