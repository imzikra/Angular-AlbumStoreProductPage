import { Injectable } from '@angular/core';
import { http, response } from '@angular/Http';
@Injectable()
export class ProductService {
  constructor(private _http: Http) {}
}
