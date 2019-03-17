import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'HGreat Movies.!';

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.getMovies00().subscribe(val => console.log(val));
  }
}
