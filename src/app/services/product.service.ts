import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product.model';
import { AddProductResponse } from '../model/add-product-response.model';
import { Observable } from 'rxjs';
import { ProductResponse } from '../model/product-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://host1.open.uom.lk/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      this.baseUrl + 'api/products',
      product,
      this.httpOptions
    );
  }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.baseUrl + 'api/products');
  } //when starting the application to product data should be loaded. 

  getQuantity(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.baseUrl + 'api/products/{quantity}/')
  }

  updateProduct(product : Product): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'api/products', product);
  }

}




// (product : Product)   Here product type data is passed from product.model.ts to the addProduct() method
// <AddProductResponse>  is the response type of the method addProduct() or let's say return type
// Inside post() method you should provide which exact endpoint that post method is going to call for inserting data(baseUrl+api/product)
// body parameter should be the product data that is submitted. 
// There is another body parameter called httpOptions, which tells the content type of the parameters sent.
// this method will be called when the form data is submitted.