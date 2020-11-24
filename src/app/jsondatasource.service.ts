import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsondatasourceService {

  constructor(private http: HttpClient) { }

  getAllCustomers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAllCustomersPost() {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(post => {
          return Object.values(post);
        })
      )
  }
}
