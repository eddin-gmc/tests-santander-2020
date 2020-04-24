import { Injectable } from '@angular/core';

import { HttpWebService } from 'src/app/core/services/http-web.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private httpWebService: HttpWebService
  ) { }

  save(data: DataComment): Promise<any> {
    return this.httpWebService.post('comments', data, true);
  }

  excecutefakeWS(): Promise<any> {
    return this.httpWebService.post('users', { key: 13 }, true);
  }
  
}

export interface DataComment {
  name: string,
  age: number,
  comment: string
}