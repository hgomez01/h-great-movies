import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  /* Setting base url */
  public static readonly baseUrl = environment.coreApiUrl;

  constructor() { }
}
