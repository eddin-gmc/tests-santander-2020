import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FakeResponseInterceptor } from './fake-response.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeResponseInterceptor,
      multi: true
    }
  ]
})
export class InterceptorsModule { }
