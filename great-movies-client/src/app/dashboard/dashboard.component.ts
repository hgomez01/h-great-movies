import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { PaginatorService } from '../services/paginator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'HGreat Movies.!';

  // array of all items to be paged
  private moviesToPage: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedMovies: any[];

  constructor(private moviesService: MoviesService, private paginatorService: PaginatorService) { }

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe(
        data => {
          // Setting movies as class object to be used later on
          this.moviesToPage = data;

          // initializing to page 1
          this.setPage(1);
        }
      );
  };

  setPage(page: number) {
    // get pager object from service
    this.pager = this.paginatorService.getPager(this.moviesToPage.length, page);

    // get current page of items
    this.pagedMovies = this.moviesToPage.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
