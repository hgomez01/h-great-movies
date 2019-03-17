import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MainService } from './main.service';
import { Movies } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends MainService {

  constructor(private http: HttpClient) {
    super();
  }

  getMovies00() : Observable<Movies[]> {
    const allMoviesUrl = `${MainService.baseUrl03}movies`;

    return this.http.get(allMoviesUrl).pipe(
      map((data: any[]) => data.map((m: any) => new Movies(
              m.title,
              m.description,
              m.coverUrl,
              m.stock,
              m.rentalPrice,
              m.salePrice,
              m.availability,
              m.status
          )))
        );
  }
}
