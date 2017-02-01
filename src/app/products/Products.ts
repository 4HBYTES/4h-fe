import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import {ServerConfig} from '../../config';

@Injectable()
export class Products {

  constructor(private http:Http) {
  }

  public getProducts():Observable<Product[]> {
    return this.http.get(`${ServerConfig.CMS_URL}/products`)
      .map((response:Response) => response.json());
  }

  public getProduct(id:ProductId):Observable<Product> {
    return this.http.get(`${ServerConfig.CMS_URL}/products/${id}`)
      .map((response:Response) => response.json());
  }

}

export interface Product {
  id:ProductId;
  name:string;
  description:string;
  price:number;
  currency:string;
}

declare type ProductId = string;
