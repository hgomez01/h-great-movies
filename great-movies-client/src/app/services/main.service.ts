import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  /* Setting base url */
  public static readonly baseUrl03 = 'http://localhost:1256/api/v2/';

  constructor() { }
}
