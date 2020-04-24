import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ThanksService {

  public _subject;

  constructor() {
    // console.log('AlertService');
    this._subject = new Subject<any>();
  }

  public getObservable(): Observable<any> {
    return this._subject.asObservable();
  }

  public showModal(data: any): void {
    //console.log('AlertService => showProgressBar');
    this._subject.next(data);
  }
}
