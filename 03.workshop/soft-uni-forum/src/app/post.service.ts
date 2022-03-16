import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './interfaces'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class PostService {

  constructor(public http: HttpClient) { }

  loadPostList(limit?: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`);
  }

}
