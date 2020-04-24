import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, } from 'rxjs/operators';

@Injectable()
export class FakeResponseInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let requestBody = JSON.parse(request.body.toString());

    if (requestBody.key != undefined) {

      return of(new HttpResponse(
        {
          status: 200,
          body: {
            status: {
              code: 200,
              description: 'ok'
            },
            data:
            {
              name: 'Eddin Gustavo',
              lastname: 'Medina Cid',
              age: 35,
            }
          }
        }
      ));
    }

    return next.handle(request)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const modEvent = event.clone({ body: { ...{ status: { code: event.status, description: event.statusText } }, ...{ data: event.body } } });
            return modEvent;
          }
        })
      )
      ;
  }
}