import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../Models/Product';
import { url } from './staff.service';

var currentdata = 'products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /**GET ALL: select all record */
  getAll(): Observable<Products[]> {
    return this.http.get<Products[]>(`${url}` + `${currentdata}`).pipe();
  }

  /**GET ONE BY ID: select a record by primary key */
  findId(id: number): Observable<Products> {
    return this.http
      .get<Products>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }

  /** CREATE: add a new record */
  create(product: Products): Observable<Products> {
    return this.http
      .post<Products>(`${url}` + `${currentdata}`, product)
      .pipe();
  }
  /** UPDATE: edit by id */
  update(product: Products): Observable<Products> {
    return this.http
      .put<Products>(`${url}` + `${currentdata}/${product.productId}`, product)
      .pipe();
  }
  /** DELETE: delete from the server by id */
  delete(id: number): Observable<Products> {
    return this.http
      .delete<Products>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }
}
