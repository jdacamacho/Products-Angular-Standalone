import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../Objects/Product';
import { ProductsJSON } from '../JSONS/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getProducts() : Observable<Product[]>{
    return of (ProductsJSON);
  }
}
