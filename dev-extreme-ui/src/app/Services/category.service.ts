import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../Models/Category';
import { url } from './staff.service';

var currentdata = 'categories';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  /**GET ALL: select all record */
  getAll(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${url}` + `${currentdata}`).pipe();
  }

  /**GET ONE BY ID: select a record by primary key */
  findId(id: number): Observable<Categories> {
    return this.http
      .get<Categories>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }

  /** CREATE: add a new record */
  create(category: Categories): Observable<Categories> {
    return this.http
      .post<Categories>(`${url}` + `${currentdata}`, category)
      .pipe();
  }
  /** UPDATE: edit person by id */
  update(category: Categories): Observable<Categories> {
    return this.http
      .put<Categories>(
        `${url}` + `${currentdata}/${category.categoryId}`,
        category
      )
      .pipe();
  }
  /** DELETE: delete person from the server by id */
  delete(id: number): Observable<Categories> {
    return this.http
      .delete<Categories>(`${url}` + `${currentdata}` + `/${id}`)
      .pipe();
  }
}
