import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpWebService } from './services/http-web.service';
import { ThanksService } from 'src/app/core/services/thanks.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpWebService,
    ThanksService
  ]
})
export class CoreModule { }
