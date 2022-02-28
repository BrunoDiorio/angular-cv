import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

import { Content } from './../model/content';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  readonly API: string = '';
  content: Content = <Content>{};
  constructor(private httpClient: HttpClient) { }

  get(language: string): Observable<Content> {
    return this.httpClient.get<Content>('/assets/'+language+'.json')
    .pipe(
      first()
    );
  };
}
