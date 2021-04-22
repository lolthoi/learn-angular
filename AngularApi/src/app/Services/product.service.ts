import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'https://60791525e7f4f50017185280.mockapi.io/store/bike/brands';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl).pipe();
  }
  findId(id: number): Observable<Product> {
    return this.http.get<Product>(`${apiUrl}/${id}`).pipe();
  }
}
