import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getUser(token: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get("http://localhost:8080/getUser", {headers: headers});
  }

  categories(): Observable<any> {
    return this.http.get("http://localhost:8080/categories");
  }

  products(): Observable<any> {
    return this.http.get("http://localhost:8080/products");
  }

  saveProduct(product:any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post("http://localhost:8080/products", product, {headers: headers});
  }

  saveCar(car:any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post("http://localhost:8080/cars", car, {headers: headers});
  }

/*
  productDetailObj: object ={};

  saveProduct(product: Product): Observable<Product>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    this.productDetailObj = {
      "category": "70bfd44a-8581-4ce6-b89f-1f2b4386ee46",
      "user": "AAADBFDE-B95E-4EA3-8F99-76AFE766C5B3",
      "car": "798c9352-59e6-41c2-b6a3-89d43e47a6bc",
      "estate": null,
      "product": product
    };
    return this.http.post<Product>("http://localhost:8080/products", this.productDetailObj, {headers: headers});
  }
*/
}
