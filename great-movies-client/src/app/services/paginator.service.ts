import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor() { }

  getPager(totalItems: number, currPage: number = 1, pageSize: number = 5) {

    let startPage: number, endPage: number;
    let totalPages = Math.ceil(totalItems / pageSize);

    /* checking page is in range */
    if (currPage < 1) {
      currPage = 1;
    } else if (currPage > totalPages) {
      currPage = totalPages;
    }

    /* Validating if show all pages if are less than 10 */
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currPage - 5;
        endPage = currPage + 4;
      }
    }

    // creating array of pages to use with ng-repeat
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // calculating item indexes
    let startIndex = (currPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // returning properties which will be used for pagination
    return {
      totalItems: totalItems,
      currentPage: currPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  };
}
