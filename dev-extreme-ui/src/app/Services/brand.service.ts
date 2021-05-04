import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brands } from '../Models/Brand';
import { url } from './staff.service';

var currentdata = 'brands';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  /**GET ALL: select all record */
  getAll(): Observable<Brands[]> {
    return this.http.get<Brands[]>(`${url}` + `${currentdata}`).pipe();
  }

  /**GET ONE BY ID: select a record by primary key */
  findId(id: number): Observable<Brands> {
    return this.http
      .get<Brands>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }

  /** CREATE: add a new record */
  create(brand: Brands): Observable<Brands> {
    return this.http
      .post<Brands>(`${url}` + `${currentdata}`, brand)
      .pipe();
  }
  /** UPDATE: edit person by id */
  update(brand: Brands): Observable<Brands> {
    return this.http
      .put<Brands>(
        `${url}` + `${currentdata}/${brand.brandId}`,
        brand
      )
      .pipe();
  }
  /** DELETE: delete person from the server by id */
  delete(id: number): Observable<Brands> {
    return this.http
      .delete<Brands>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }
}
