import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceTs {
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {}

    getPostById(id: number): Observable<Post> {
      return this.http.get<Post>(`${this.apiUrl}/${id}`);
    }
    addPost(post: Post): Observable<Post> {
      return this.http.post<Post>(this.apiUrl, post);
    }
}
